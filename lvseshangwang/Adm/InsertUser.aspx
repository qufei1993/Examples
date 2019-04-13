<%@ Page Language="C#" MasterPageFile="~/Adm/Master.master" AutoEventWireup="true" CodeFile="InsertUser.aspx.cs" Inherits="Adm_InsertUser" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <table align="center" cellpadding="0" style="width: 408px; height: 322px">
        <tr>
            <td style="width: 122px">
                用户名</td>
            <td>
                <asp:TextBox ID="txtLoginName" runat="server"></asp:TextBox>
            </td>
            <td style="width: 129px">
                <asp:Button ID="btnTest" runat="server" BorderStyle="Ridge" Height="26px" 
                    onclick="btnTest_Click" Text="检测是否可用" />
                <asp:CustomValidator ID="CustomValidator8" runat="server" 
                    ControlToValidate="txtLoginName" ErrorMessage="用户登录名不能为空">*</asp:CustomValidator>
            </td>
        </tr>
        <tr>
            <td style="width: 122px">
                性别</td>
            <td>
                <asp:DropDownList ID="ddlSex" runat="server" Height="16px" Width="44px">
                    <asp:ListItem>男</asp:ListItem>
                    <asp:ListItem>女</asp:ListItem>
                </asp:DropDownList>
            </td>
            <td style="width: 129px">
                &nbsp;</td>
        </tr>
        <tr>
            <td style="height: 21px; width: 122px">
                密码</td>
            <td style="height: 21px">
                <asp:TextBox ID="txtPwd" runat="server"></asp:TextBox>
            </td>
            <td style="width: 129px; height: 21px">
                <asp:CustomValidator ID="CustomValidator2" runat="server" 
                    ControlToValidate="txtPwd" ErrorMessage="用户密码不能为空">*</asp:CustomValidator>
            </td>
        </tr>
        <tr>
            <td style="width: 122px">
                重复密码</td>
            <td>
                <asp:TextBox ID="txtSecPwd" runat="server"></asp:TextBox>
            </td>
            <td style="width: 129px">
                <asp:CustomValidator ID="CustomValidator3" runat="server" 
                    ControlToValidate="txtSecPwd" ErrorMessage="用户重复密码不能为空">*</asp:CustomValidator>
            </td>
        </tr>
        <tr>
            <td style="width: 122px">
                真实姓名</td>
            <td>
                <asp:TextBox ID="txtTName" runat="server"></asp:TextBox>
            </td>
            <td style="width: 129px">
                &nbsp;</td>
        </tr>
        <tr>
            <td style="width: 122px">
                密码问题</td>
            <td>
                <asp:TextBox ID="txtQuePwd" runat="server"></asp:TextBox>
            </td>
            <td style="width: 129px">
                <asp:CustomValidator ID="CustomValidator5" runat="server" 
                    ControlToValidate="txtQuePwd" ErrorMessage="用户密码问题不能为空">*</asp:CustomValidator>
            </td>
        </tr>
        <tr>
            <td style="width: 122px">
                密码提示答案</td>
            <td>
                <asp:TextBox ID="txtAnsPwd" runat="server"></asp:TextBox>
            </td>
            <td style="width: 129px">
                <asp:CustomValidator ID="CustomValidator6" runat="server" 
                    ControlToValidate="txtAnsPwd" ErrorMessage="用户密码提示答案不能为空">*</asp:CustomValidator>
            </td>
        </tr>
        <tr>
            <td style="width: 122px">
                Email地址</td>
            <td>
                <asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>
            </td>
            <td style="width: 129px">
                <asp:CustomValidator ID="CustomValidator7" runat="server" 
                    ControlToValidate="txtEmail" ErrorMessage="用户邮箱不能为空">*</asp:CustomValidator>
            </td>
        </tr>
        <tr>
            <td style="width: 122px">
                &nbsp;</td>
            <td>
                <asp:Button ID="btnAdd" runat="server" onclick="btnAdd_Click" Text="添加" />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <asp:Button ID="btnCancel" runat="server" onclick="btnCancel_Click" Text="取消" />
            </td>
            <td style="width: 129px">
                &nbsp;</td>
        </tr>
    </table>
</asp:Content>

