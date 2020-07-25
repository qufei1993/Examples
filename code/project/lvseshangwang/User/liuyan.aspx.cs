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


public partial class User_liuyan : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
      protected void btok_Click1(object sender, EventArgs e)
    {
        string str = "";
        foreach (ListItem listItem in CHaihao.Items) 
        {
            if (listItem.Selected) 
           { str += listItem.Value+"\t"; }

        }
        if (txtUser.Text == "")
        {
            lblUser.Text = "请输入昵称！";
            return;
        }
        SqlConnection con = new SqlConnection(@"Server=.\SQLEXPRESS;Integrated Security=True;database=WebDBJWS");
        string strInsert = "Insert into Guest(name,mail,sex,nian,yue,ri,aihao,liuyan) Values(@UserName,@Usermail,@UserSex,@Usernian,@Useryue,@Userri,@Useraihao,@Userliuyan)";
        SqlCommand cmdInsert = new SqlCommand(strInsert, con);
        cmdInsert.Parameters.AddWithValue("@UserName", txtUser.Text);
        cmdInsert.Parameters.AddWithValue("@Usermail", txtemail.Text);
        cmdInsert.Parameters.AddWithValue("@UserSex", rdSex.Text);
        cmdInsert.Parameters.AddWithValue("@Usernian", DRnian.SelectedValue);
        cmdInsert.Parameters.AddWithValue("@Useryue", DRyue.SelectedValue);
        cmdInsert.Parameters.AddWithValue("@Userri", DRri.SelectedValue);
        cmdInsert.Parameters.AddWithValue("@Useraihao",str);
        cmdInsert.Parameters.AddWithValue("@Userliuyan",txtliuyan.Text);

        try
        {
            con.Open();
            cmdInsert.ExecuteNonQuery();
            Response.Redirect("liuyan02.aspx");                                                                                                                                                                                                                        
        }
        
        finally
        {
            con.Close();
        }
    }
    protected void btCancle_Click(object sender, EventArgs e)
    {
        txtUser.Text= "";
        txtemail.Text= "";
        DRnian.SelectedValue ="";
        DRyue.SelectedValue= "";
        DRri.SelectedValue= "";
        
    }
}
