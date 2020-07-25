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

public partial class Adm_ManageModule : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        TextBox txt = (TextBox)FormView2.FindControl("CreatDateTextBox");
        txt.Text = DateTime.Now.ToLocalTime().ToString();
        if (Session["AdmName"] == null)
        {
            Response.Redirect("~/Adm/AdmLogin.aspx");
        }
        Panel1.Visible = false;
    }
    protected void LinkButton1_Click(object sender, EventArgs e)
    {
        Panel1.Visible = true;
    }
    protected void FormView2_PageIndexChanging(object sender, FormViewPageEventArgs e)
    {
        TextBox txt = (TextBox)FormView2.FindControl("CreatDateTextBox");
        txt.Text = DateTime.Now.ToLocalTime().ToString();
    }
 
}
