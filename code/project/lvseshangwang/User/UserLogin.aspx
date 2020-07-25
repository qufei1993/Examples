<%@ Page Language="C#" MasterPageFile="~/User/guest.master" AutoEventWireup="true" CodeFile="UserLogin.aspx.cs" Inherits="User_UserLogin" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

<table align="center" cellpadding="0" cellspacing="0" 
    style="width: 389px; height: 331px;margin-top:50px;" border="0">
    <tr>
        <td style="height: 38px; " colspan="3">
           <img src="images/denglu.jpg" style="height: 38px; width: 390px" /></td>
    </tr>
    <tr>
        <td style="width: 664px; height: 38px; text-align: center;">
            用户名：</td>
        <td style="width: 188px; height: 38px;">
            <asp:TextBox ID="txtUserID" runat="server" Height="29px" Width="148px"></asp:TextBox>
        </td>
        <td style="height: 38px">
            <asp:CustomValidator ID="CustomValidator1" runat="server" 
                ControlToValidate="txtUserID" ErrorMessage="账号不能为空"></asp:CustomValidator>
        </td>
    </tr>
    <tr>
        <td style="width: 664px; height: 53px; text-align: center;">
            密&nbsp;&nbsp;&nbsp; 码：</td>
        <td style="width: 188px; height: 53px;">
            <asp:TextBox ID="txtPassword" runat="server" Height="28px" Width="149px" 
                TextMode="Password"></asp:TextBox>
        </td>
        <td style="height: 53px">
            <asp:CustomValidator ID="CustomValidator2" runat="server" 
                ControlToValidate="txtPassword" ErrorMessage="密码不能为空"></asp:CustomValidator>
        </td>
    </tr>
    <tr>
        <td style="width: 664px; height: 41px; text-align: center;">
            验证码：</td>
        <td style="width: 188px; height: 41px;">
            <asp:TextBox ID="txtValidateCode" runat="server" Height="26px" Width="149px"></asp:TextBox>
        </td>
        <td style="height: 41px">
            <asp:Label ID="labValidateCode" runat="server"></asp:Label>
            <asp:CustomValidator ID="CustomValidator3" runat="server" 
                ControlToValidate="txtValidateCode" ErrorMessage="必须填写验证吗"></asp:CustomValidator>
        </td>
    </tr>
    <tr>
        <td style="width: 664px; height: 43px">
        </td>
        <td style="width: 188px; height: 43px">
            <asp:Button ID="btnLogin" runat="server" Height="32px" onclick="btnLogin_Click" 
                Text="登录" Width="47px" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <asp:Button ID="btnCancel" runat="server" Height="32px" 
                onclick="btnCancel_Click" style="margin-bottom: 0px" Text="取消" Width="47px" />
        </td>
        <td style="height: 43px">
            <asp:HyperLink ID="HyperLink2" runat="server" 
                NavigateUrl="~/User/InsertUser.aspx" Width="100px">注册新用户</asp:HyperLink>
        </td>
    </tr>
    <tr>
        <td style="width: 664px; height: 46px;">
            </td>
        <td style="width: 188px; height: 46px;">
            <asp:Label ID="lblMessage" runat="server"></asp:Label>
        </td>
        <td style="height: 46px">
            <asp:HyperLink ID="HyperLink1" runat="server">返回</asp:HyperLink>
        </td>
    </tr>
</table>

</asp:Content>

