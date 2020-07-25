using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Data.SqlClient;
using System.Text;

public partial class Adm_AdmLogin : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            labValidateCode.Text = validateCode();
        }
    }
    protected void btnLogin_Click(object sender, EventArgs e)
    {
        if (txtValidateCode.Text.Trim() != labValidateCode.Text.Trim())
        {
            Response.Write("<script lanuage=javascript>alert('验证码错误');location='javascript:history.go(-1)'</script>");
        }
        else
        {
            string connstring = ConfigurationManager.ConnectionStrings["db_BBS_DataConnectionString"].ToString();
            SqlConnection conn = new SqlConnection(connstring);
            if (conn.State == ConnectionState.Closed)
            {
                conn.Open();
            }
            string cmdstring = "select * from tb_Admin where ID=@ID and Pwd=@Pwd";
            SqlCommand cmd = new SqlCommand(cmdstring, conn);
            cmd.Parameters.AddWithValue("@ID", txtUserID.Text);//设置参数
            cmd.Parameters.AddWithValue("@Pwd", txtPassword.Text);//设置参数
            SqlDataReader dtr = cmd.ExecuteReader();
            //判断该用户是否存在
            if (dtr.HasRows) //存在
            {
                dtr.Read();
                Session["AdmName"] = dtr.GetString(1);
                Response.Redirect("~/Adm/ManageModule.aspx");
            }
            else
            {
                lblMessage.Text = "账号或密码有错，请重新输入！";
            }
        }

    }
    protected void btnCancel_Click(object sender, EventArgs e)
    {
        txtUserID.Text = "";
        txtPassword.Text = "";
        txtValidateCode.Text = "";
        txtUserID.Focus();

    }
    string validateCode()
    {
        byte[] bytes = new byte[100];
        Random randObj = new Random();
        int code;
        for (int i = 0; i < 4; i++)
        {
            code = randObj.Next(100, 122);
            bytes[i] = Convert.ToByte(code);
        }
        ASCIIEncoding ascii = new ASCIIEncoding();
        string validateCode = ascii.GetString(bytes, 0, 4);
        return validateCode.ToString();
    }

}
