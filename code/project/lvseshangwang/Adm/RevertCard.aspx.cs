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

public partial class Adm_RevertCard : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {


        if (Session["AdmName"] == null)
        {
            Response.Redirect("~/Adm/AdmLogin.aspx");
        }


    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        Response.Redirect("ShowCard.aspx?ID=" + Request.QueryString["ID"].ToString());
  

    }
    protected void btnRevert_Click(object sender, EventArgs e)
    {
        string connstring = ConfigurationManager.ConnectionStrings["db_BBS_DataConnectionString"].ToString();
        SqlConnection conn = new SqlConnection(connstring);
        if (conn.State == ConnectionState.Closed)
        {
            conn.Open();
        }
        string sqlstr = "insert into tb_RevertCard "
            + "(CardID,Content,RevertDate,UserID)"
            + "values(@CardID,@Content,@RevertDate,@UserID)";

        SqlCommand cmdInsert = new SqlCommand(sqlstr, conn);
        cmdInsert.Parameters.AddWithValue("@CardID", Request.QueryString["ID"]);//设置参数
        cmdInsert.Parameters.AddWithValue("@Content", txtRevertContent.Text);//设置参数
        cmdInsert.Parameters.AddWithValue("@RevertDate", System.DateTime.Now);//设置参数
        cmdInsert.Parameters.AddWithValue("@UserID", Session["AdmName"]);//设置参数

        if (cmdInsert.ExecuteNonQuery() == 1)
        {
            Response.Redirect("ShowCard.aspx?ID=" + Request.QueryString["ID"].ToString());
        }

    }
}
