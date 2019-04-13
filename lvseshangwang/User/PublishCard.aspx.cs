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

public partial class User_PublishCard : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["Name"] == null)
        {
            Response.Redirect("~/User/UserLogin.aspx");
        }
    }
    protected void btnDeliver_Click(object sender, EventArgs e)
    {
         string connstring = ConfigurationManager.ConnectionStrings["db_BBS_DataConnectionString"].ToString();
        SqlConnection conn = new SqlConnection(connstring);
        if (conn.State == ConnectionState.Closed)
        {
            conn.Open();
        }
        string sqlstr = "insert into tb_Card "
            + "(ModuleID,Name,Content,UserID,PublishDate,Checked)"
            + "values(@ModuleID,@Name,@Content,@UserID,@PublishDate,@Checked)";

        SqlCommand cmdInsert = new SqlCommand(sqlstr, conn);
        cmdInsert.Parameters.AddWithValue("@ModuleID", Request.QueryString["ModuleID"]);//设置参数
        cmdInsert.Parameters.AddWithValue("@Name", txtCardName.Text);//设置参数        
        cmdInsert.Parameters.AddWithValue("@Content", txtCardContent.Text);//设置参数
        cmdInsert.Parameters.AddWithValue("@PublishDate", System.DateTime.Now);//设置参数
        cmdInsert.Parameters.AddWithValue("@UserID", Session["Name"]);//设置参数
        cmdInsert.Parameters.AddWithValue("@Checked", false);//设置参数


        if (cmdInsert.ExecuteNonQuery() == 1)
        {
            // Response.Write("<script language='javascript'>alert('您发帖成功！');</script>");
            Response.Redirect("~/user/LookCard.aspx?id=" + Request.QueryString["ModuleID"].ToString());
        }
    }
    protected void btnCancel_Click(object sender, EventArgs e)
    {
        if (Session["Name"] == null)
        {
            Response.Redirect("~/User/UserLogin.aspx");
        }
        Response.Redirect("~/user/LookCard.aspx?id=" + Request.QueryString["ModuleID"].ToString());
    }
}
