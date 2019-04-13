<%@ Page Language="C#" MasterPageFile="~/Adm/Master.master" AutoEventWireup="true" CodeFile="ManageRevert.aspx.cs" Inherits="Adm_ManageRevert" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <asp:GridView ID="GridView1" runat="server" AllowPaging="True" 
        AutoGenerateColumns="False" DataKeyNames="ID" DataSourceID="SqlDataSource1" 
        Height="139px" Width="686px">
        <Columns>
            <asp:BoundField DataField="UserID" HeaderText="回帖人" SortExpression="UserID" />
            <asp:BoundField DataField="Content" HeaderText="内容" SortExpression="Content" />
            <asp:BoundField DataField="RevertDate" HeaderText="回帖时间" 
                SortExpression="RevertDate" />
            <asp:CommandField ShowDeleteButton="True" />
        </Columns>
    </asp:GridView>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:db_BBS_DataConnectionString %>" 
        DeleteCommand="DELETE FROM tb_RevertCard WHERE (ID = @ID)" InsertCommand="INSERT INTO [tb_RevertCard] ([CardID], [Content], [RevertDate], [UserID]) VALUES (@CardID, @Content, @RevertDate, @UserID)
" 
        SelectCommand="SELECT ID, CardID, [Content], RevertDate, UserID FROM tb_RevertCard ORDER BY RevertDate DESC" UpdateCommand="UPDATE [tb_RevertCard] SET [CardID] = @CardID, [Content] = @Content, [RevertDate] = @RevertDate, [UserID] = @UserID WHERE [ID] = @ID
">
        <DeleteParameters>
            <asp:Parameter Name="ID" />
        </DeleteParameters>
        <UpdateParameters>
            <asp:Parameter Name="CardID" />
            <asp:Parameter Name="Content" />
            <asp:Parameter Name="RevertDate" />
            <asp:Parameter Name="UserID" />
            <asp:Parameter Name="ID" />
        </UpdateParameters>
        <InsertParameters>
            <asp:Parameter Name="CardID" />
            <asp:Parameter Name="Content" />
            <asp:Parameter Name="RevertDate" />
            <asp:Parameter Name="UserID" />
        </InsertParameters>
    </asp:SqlDataSource>
</asp:Content>

