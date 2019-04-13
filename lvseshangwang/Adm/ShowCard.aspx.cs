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

public partial class Adm_ShowCard : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["AdmName"] == null)
        {
            Response.Redirect("~/Adm/AdmLogin.aspx");
        }
        else
        {
            ShowRevertCart();
        }

    }
    private void ShowRevertCart()
    {
        int curpage = Convert.ToInt32(this.labPage.Text);
        PagedDataSource ps = new PagedDataSource();
        string connstring = ConfigurationManager.ConnectionStrings["db_BBS_DataConnectionString"].ToString();
        SqlConnection conn = new SqlConnection(connstring);
        if (conn.State == ConnectionState.Closed)
        {
            conn.Open();
        }
        string sqlstr = "SELECT [CardID], [Content], [RevertDate] FROM [tb_RevertCard] WHERE ([CardID] = @CardID)";
        SqlCommand cmd = new SqlCommand(sqlstr, conn);
        cmd.Parameters.AddWithValue("@CardID", Request.QueryString["ID"]);

        SqlDataAdapter da = new SqlDataAdapter(cmd);
        DataSet ds = new DataSet();
        da.Fill(ds, "RevertCard");
        ps.DataSource = ds.Tables["RevertCard"].DefaultView;

        ps.AllowPaging = true; //是否可以分页
        ps.PageSize = 4; //显示的数量
        ps.CurrentPageIndex = curpage - 1; //取得当前页的页码
        this.lnkbtnUp.Enabled = true;
        this.lnkbtnNext.Enabled = true;
        this.lnkbtnBack.Enabled = true;
        this.lnkbtnOne.Enabled = true;
        if (curpage == 1)
        {
            this.lnkbtnOne.Enabled = false;//不显示第一页按钮
            this.lnkbtnUp.Enabled = false;//不显示上一页按钮
        }
        if (curpage == ps.PageCount)
        {
            this.lnkbtnNext.Enabled = false;//不显示下一页
            this.lnkbtnBack.Enabled = false;//不显示最后一页
        }
        this.labBackPage.Text = Convert.ToString(ps.PageCount);
        this.DataList2.DataSource = ps;
        //this.dlContent.DataKeyField = "CardID";
        this.DataList2.DataBind();
    }


    protected void LinkButton1_Click(object sender, EventArgs e)
    {
        Response.Redirect("~/Adm/RevertCard.aspx?ID=" + DataList1.DataKeys[0].ToString());

    }
    protected void lnkbtnOne_Click(object sender, EventArgs e)
    {
        this.labPage.Text = "1";
        this.ShowRevertCart();

    }
    protected void lnkbtnUp_Click(object sender, EventArgs e)
    {
        this.labPage.Text = Convert.ToString(Convert.ToInt32(this.labPage.Text) - 1);
        this.ShowRevertCart();
    }

    protected void  lnkbtnNext_Click(object sender, EventArgs e)
    {
        this.labPage.Text = Convert.ToString(Convert.ToInt32(this.labPage.Text) + 1);
        this.ShowRevertCart();
 
    }
    protected void lnkbtnBack_Click(object sender, EventArgs e)
    {
        this.labPage.Text = this.labBackPage.Text;
        this.ShowRevertCart();

    }
    protected void LinkButton2_Click(object sender, EventArgs e)
    {
        Response.Redirect("~/Adm/LookCard.aspx?id=" + Request.QueryString["ModuleID"].ToString());

    }
}