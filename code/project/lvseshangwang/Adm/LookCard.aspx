<%@ Page Language="C#" MasterPageFile="~/Adm/Master.master" AutoEventWireup="true" CodeFile="LookCard.aspx.cs" Inherits="Adm_LookCard" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <asp:GridView ID="GridView1" runat="server" AllowPaging="True" 
        AllowSorting="True" AutoGenerateColumns="False" DataKeyNames="ID" 
        DataSourceID="SqlDataSource1" Height="54px" Width="682px">
        <Columns>
            <asp:HyperLinkField DataNavigateUrlFields="ID,ModuleID" 
                DataNavigateUrlFormatString="~/Adm/ShowCard.aspx?id={0}&amp;ModuleID={1}" 
                DataTextField="Name" HeaderText="标题" />
            <asp:BoundField DataField="UserID" HeaderText="发帖人" SortExpression="UserID" />
            <asp:BoundField DataField="PublishDate" HeaderText="发帖时间" 
                SortExpression="PublishDate" />
        </Columns>
    </asp:GridView>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:db_BBS_DataConnectionString %>" 
        SelectCommand="SELECT UserID, Name, PublishDate, ID, ModuleID FROM tb_Card WHERE (Checked = @Checked) AND (ModuleID = @ModuleID)">
        <SelectParameters>
            <asp:Parameter DefaultValue="true" Name="Checked" />
            <asp:QueryStringParameter DefaultValue="" Name="ModuleID" 
                QueryStringField="ID" />
        </SelectParameters>
    </asp:SqlDataSource>
</asp:Content>

