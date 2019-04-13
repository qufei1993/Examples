<%@ Page Language="C#" MasterPageFile="~/Adm/Master.master" AutoEventWireup="true" CodeFile="CardInfo.aspx.cs" Inherits="Adm_CardInfo" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <asp:DetailsView ID="DetailsView1" runat="server" AutoGenerateRows="False" 
        DataKeyNames="ID" DataSourceID="SqlDataSource1" Height="123px" Width="684px">
        <Fields>
            <asp:BoundField DataField="ID" HeaderText="编号" InsertVisible="False" 
                ReadOnly="True" SortExpression="ID" />
            <asp:BoundField DataField="ModuleID" HeaderText="版块编号" 
                SortExpression="ModuleID" />
            <asp:BoundField DataField="UserID" HeaderText="发帖人" SortExpression="UserID" />
            <asp:BoundField DataField="Name" HeaderText="帖子标题" SortExpression="Name" />
            <asp:BoundField DataField="Content" HeaderText="内容" SortExpression="Content" />
            <asp:BoundField DataField="PublishDate" HeaderText="发帖时间" 
                SortExpression="PublishDate" />
            <asp:CheckBoxField DataField="Checked" HeaderText="是否审核" 
                SortExpression="Checked" />
            <asp:CommandField EditText="审核" ShowDeleteButton="True" ShowEditButton="True" />
        </Fields>
    </asp:DetailsView>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:db_BBS_DataConnectionString %>" 
        
        SelectCommand="SELECT ID, UserID, ModuleID, Name, [Content], PublishDate, Checked FROM tb_Card WHERE (ID = @ID)" 
        DeleteCommand="DELETE FROM [tb_Card] WHERE [ID] = @ID" 
        InsertCommand="INSERT INTO tb_Card(UserID, ModuleID, Name, [Content], PublishDate, Checked) VALUES (@UserID, @ModuleID, @Name, @Content, @PublishDate, @Checked)" 
        UpdateCommand="UPDATE [tb_Card] SET [UserID] = @UserID, [ModuleID] = @ModuleID, [Name] = @Name, [Content] = @Content, [PublishDate] = @PublishDate, [Checked] = @Checked WHERE [ID] = @ID">
        <SelectParameters>
            <asp:QueryStringParameter Name="ID" QueryStringField="ID" />
        </SelectParameters>
        <DeleteParameters>
            <asp:Parameter Name="ID" />
        </DeleteParameters>
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
        </InsertParameters>
    </asp:SqlDataSource>
</asp:Content>

