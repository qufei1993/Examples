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

public partial class Adm_InsertUser : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void btnTest_Click(object sender, EventArgs e)
    {
        string connstring = ConfigurationManager.ConnectionStrings["db_BBS_DataConnectionString"].ToString();
        SqlConnection conn = new SqlConnection(connstring);
        string sqlstr = "select UserLoginName from tb_User where UserLoginName='" + this.txtLoginName.Text + "'";
        if (conn.State == ConnectionState.Closed)
        {
            conn.Open();
        }
        SqlCommand sqlcom = new SqlCommand(sqlstr, conn);
        SqlDataReader read = sqlcom.ExecuteReader();
        read.Read();
        if (read.HasRows)
        {
            Response.Write("<script language='javascript'>alert('用户名已经注册过');localtion='UserRegister.aspx'</script>");
            return;
        }
        else
        {
            Response.Write("<script language='javascript'>alert('用户名未被注册');localtion='UserRegister.aspx'</script>");
        }
        read.Close();
        conn.Close();

    }
    protected void btnAdd_Click(object sender, EventArgs e)
    {
        string connstring = ConfigurationManager.ConnectionStrings["db_BBS_DataConnectionString"].ToString();
        SqlConnection conn = new SqlConnection(connstring);
        if (conn.State == ConnectionState.Closed)
        {
            conn.Open();
        }
        string sqlstr = "insert into tb_User "
            + "(UserLoginName,UserSex,UserPwd,UserName,UserQuePwd,UserAnsPwd,UserEmail)"
            + "values(@UserLoginName,@UserSex,@UserPwd,@UserName,@UserQuePwd,@UserAnsPwd,@UserEmail)";
        SqlCommand cmdInsert = new SqlCommand(sqlstr, conn);
        cmdInsert.Parameters.AddWithValue("@UserLoginName", txtLoginName.Text);//设置参数
        cmdInsert.Parameters.AddWithValue("@UserSex", ddlSex.SelectedValue);//设置参数
        cmdInsert.Parameters.AddWithValue("@UserPwd", txtPwd.Text);//设置参数
        cmdInsert.Parameters.AddWithValue("@UserName", txtTName.Text);//设置参数
        cmdInsert.Parameters.AddWithValue("@UserQuePwd", txtQuePwd.Text);//设置参数
        cmdInsert.Parameters.AddWithValue("@UserAnsPwd", txtAnsPwd.Text);//设置参数
        cmdInsert.Parameters.AddWithValue("@UserEmail", txtEmail.Text);//设置参数

        if (cmdInsert.ExecuteNonQuery() == 1)
        {
            Response.Write("<script language='javascript'>alert('注册成功！');localtion='UserRegister.aspx'</script>");
            Response.Redirect("~/User/ShowModule.aspx");
        }
        else
        {
            Response.Write("<script language='javascript'>alert('注册失败！');localtion='UserRegister.aspx'</script>");
        }    
    }
    protected void btnCancel_Click(object sender, EventArgs e)
    {
        txtLoginName.Text = "";
        txtPwd.Text = "";
        txtTName.Text = "";
        txtQuePwd.Text = "";
        txtAnsPwd.Text = "";
        txtEmail.Text = "";
        txtLoginName.Focus();
    }
}
