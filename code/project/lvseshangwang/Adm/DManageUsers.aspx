<%@ Page Language="C#" MasterPageFile="~/Adm/Master.master" AutoEventWireup="true" CodeFile="DManageUsers.aspx.cs" Inherits="Adm_DManageUsers" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <br />
    
    <table align="center" cellpadding="0" cellspacing="0" 
        style="width: 694px; height: 276px">
        <tr>
            <td style="width: 17px">
                &nbsp;</td>
            <td style="width: 664px">
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td style="width: 17px">
                &nbsp;</td>
            <td style="width: 664px">
    <asp:GridView ID="GridView1" runat="server" DataSourceID="SqlDataSource1" 
        Height="226px" Width="653px" AutoGenerateColumns="False" 
        DataKeyNames="UserLoginName" AllowPaging="True">
        <Columns>
            <asp:CommandField ShowDeleteButton="True" />
            <asp:BoundField DataField="UserLoginName" HeaderText="登陆名" 
                ReadOnly="True" SortExpression="UserLoginName" />
            <asp:BoundField DataField="UserSex" HeaderText="性别" 
                SortExpression="UserSex" />
            <asp:BoundField DataField="UserPwd" HeaderText="密码" 
                SortExpression="UserPwd" />
            <asp:BoundField DataField="UserName" HeaderText="真实姓名" 
                SortExpression="UserName" />
            <asp:BoundField DataField="UserEmail" HeaderText="邮箱" 
                SortExpression="UserEmail" />
        </Columns>
    </asp:GridView>
            </td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td style="width: 17px; height: 19px;">
                </td>
            <td style="width: 664px; height: 19px;" align="center">
                <asp:HyperLink ID="HyperLink1" runat="server" 
                    NavigateUrl="~/User/InsertUser.aspx">注册新用户</asp:HyperLink>
            </td>
            <td style="height: 19px">
                </td>
        </tr>
    </table>
    
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:db_BBS_DataConnectionString %>" 
        DeleteCommand="DELETE FROM [tb_User] WHERE [UserLoginName] = @UserLoginName" 
        InsertCommand="INSERT INTO [tb_User] ([UserLoginName], [UserSex], [UserPwd], [UserName], [UserQuePwd], [UserAnsPwd], [UserEmail]) VALUES (@UserLoginName, @UserSex, @UserPwd, @UserName, @UserQuePwd, @UserAnsPwd, @UserEmail)" 
        SelectCommand="SELECT * FROM [tb_User]" 
        UpdateCommand="UPDATE [tb_User] SET [UserSex] = @UserSex, [UserPwd] = @UserPwd, [UserName] = @UserName, [UserQuePwd] = @UserQuePwd, [UserAnsPwd] = @UserAnsPwd, [UserEmail] = @UserEmail WHERE [UserLoginName] = @UserLoginName">
        <DeleteParameters>
            <asp:Parameter Name="UserLoginName" Type="String" />
        </DeleteParameters>
        <UpdateParameters>
            <asp:Parameter Name="UserSex" Type="String" />
            <asp:Parameter Name="UserPwd" Type="String" />
            <asp:Parameter Name="UserName" Type="String" />
            <asp:Parameter Name="UserQuePwd" Type="String" />
            <asp:Parameter Name="UserAnsPwd" Type="String" />
            <asp:Parameter Name="UserEmail" Type="String" />
            <asp:Parameter Name="UserLoginName" Type="String" />
        </UpdateParameters>
        <InsertParameters>
            <asp:Parameter Name="UserLoginName" Type="String" />
            <asp:Parameter Name="UserSex" Type="String" />
            <asp:Parameter Name="UserPwd" Type="String" />
            <asp:Parameter Name="UserName" Type="String" />
            <asp:Parameter Name="UserQuePwd" Type="String" />
            <asp:Parameter Name="UserAnsPwd" Type="String" />
            <asp:Parameter Name="UserEmail" Type="String" />
        </InsertParameters>
    </asp:SqlDataSource>
</asp:Content>

