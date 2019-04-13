<%@ Page Language="C#" MasterPageFile="~/Adm/Master.master" AutoEventWireup="true" CodeFile="ManageTiezi.aspx.cs" Inherits="Adm_ManageTiezi" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <asp:GridView ID="GridView1" runat="server" DataSourceID="SqlDataSource1" 
    Height="201px" Width="681px" AutoGenerateColumns="False" DataKeyNames="ID">
        <Columns>
            <asp:CheckBoxField DataField="Checked" HeaderText="审核" 
                SortExpression="Checked" />
            <asp:HyperLinkField DataNavigateUrlFields="ID" 
                DataNavigateUrlFormatString="CardInfo.aspx?ID={0}" DataTextField="Name" 
                HeaderText="标题" />
            <asp:BoundField DataField="UserID" HeaderText="发帖人" SortExpression="UserID" />
            <asp:BoundField DataField="PublishDate" HeaderText="发帖时间" 
                SortExpression="PublishDate" />
            <asp:BoundField DataField="ModuleName" HeaderText="版块" 
                SortExpression="ModuleName" />
        </Columns>
</asp:GridView>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:db_BBS_DataConnectionString %>" InsertCommand="INSERT INTO [tb_Card] ([UserID], [ModuleID], [Name], [Content], [PublishDate], [Checked]) VALUES (@UserID, @ModuleID, @Name, @Content, @PublishDate, @Checked)
DELETE FROM [tb_Card] WHERE [ID] = @ID
" 
        SelectCommand="SELECT tb_Card.Name, tb_Card.PublishDate, tb_Card.Checked, tb_Card.UserID, tb_Module.Name AS ModuleName, tb_Card.ID FROM tb_Card INNER JOIN tb_Module ON tb_Card.ModuleID = tb_Module.ID ORDER BY tb_Card.PublishDate DESC" UpdateCommand="UPDATE [tb_Card] SET [UserID] = @UserID, [ModuleID] = @ModuleID, [Name] = @Name, [Content] = @Content, [PublishDate] = @PublishDate, [Checked] = @Checked WHERE [ID] = @ID
">
    <UpdateParameters>
        <asp:Parameter Name="UserID" />
        <asp:Parameter Name="ModuleID" />
        <asp:Parameter Name="Name" />
        <asp:Parameter Name="Content" />
        <asp:Parameter Name="PublishDate" />
        <asp:Parameter Name="Checked" />
        <asp:Parameter Name="ID" />
    </UpdateParameters>
    <InsertParameters>
        <asp:Parameter Name="UserID" />
        <asp:Parameter Name="ModuleID" />
        <asp:Parameter Name="Name" />
        <asp:Parameter Name="Content" />
        <asp:Parameter Name="PublishDate" />
        <asp:Parameter Name="Checked" />
        <asp:Parameter Name="ID" />
    </InsertParameters>
    </asp:SqlDataSource>
</asp:Content>

