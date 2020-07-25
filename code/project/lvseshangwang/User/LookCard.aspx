<%@ Page Language="C#" MasterPageFile="~/User/guest.master" AutoEventWireup="true" CodeFile="LookCard.aspx.cs" Inherits="User_LookCard" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
  
    <asp:GridView ID="GridView1" runat="server" AllowPaging="True" 
        AutoGenerateColumns="False" DataKeyNames="ID" DataSourceID="SqlDataSource1" 
        Height="221px" Width="686px">
        <Columns>
            <asp:HyperLinkField DataNavigateUrlFields="ID,ModuleID" 
                DataNavigateUrlFormatString="~/User/ShowCard.aspx?id={0}&amp;ModuleID={1}" 
                DataTextField="Name" HeaderText="标题" />
            <asp:BoundField DataField="UserID" HeaderText="发帖人" SortExpression="UserID" />
            <asp:BoundField DataField="PublishDate" HeaderText="发帖时间" 
                SortExpression="PublishDate" />
        </Columns>
    </asp:GridView>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    <asp:LinkButton ID="LinkButton1" runat="server" onclick="LinkButton1_Click">我要发帖</asp:LinkButton>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/Index.aspx">返回论坛首页</asp:HyperLink>
    &nbsp;<asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:db_BBS_DataConnectionString %>" 
        SelectCommand="SELECT UserID, Name, PublishDate, ID, ModuleID FROM tb_Card WHERE (Checked = @Checked) AND (ModuleID = @ModuleID)">
        <SelectParameters>
            <asp:Parameter DefaultValue="true" Name="Checked" />
            <asp:QueryStringParameter DefaultValue="" Name="ModuleID" 
                QueryStringField="ID" />
        </SelectParameters>
    </asp:SqlDataSource>
</asp:Content>

