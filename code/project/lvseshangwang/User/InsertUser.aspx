<%@ Page Language="C#" MasterPageFile="~/User/guest.master" AutoEventWireup="true" CodeFile="InsertUser.aspx.cs" Inherits="User_InsertUser" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
        <div style="text-align: center; height: 14px; width: 709px;">
            用户注册<br />
            <table align="center" cellpadding="0" cellspacing="0" style="height: 395px">
                <tr>
                    <td style="width: 156px; text-align: center;">
                    </td>
                    <td style="width: 344px; text-align: left;">
                    </td>
                    <td style="width: 33px">
                    </td>
                </tr>
                <tr>
                    <td style="width: 156px; text-align: center;">
                        <asp:Label ID="labLoginName" runat="server" Font-Size="12pt" ForeColor="White" 
                            Text="用户名" Width="83px"></asp:Label>
                    </td>
                    <td style="width: 344px; text-align: left;">
                        <asp:TextBox ID="txtLoginName" runat="server" Font-Size="9pt"></asp:TextBox>
                        <asp:Button ID="btnTest" runat="server" BorderStyle="Ridge" 
                            CausesValidation="False" Font-Size="9pt" OnClick="btnTest_Click" Text="检测是否可用" 
                            Width="110px" />
                    </td>
                    <td style="width: 33px">
                        <asp:RequiredFieldValidator ID="rfvLoginName" runat="server" 
                            ControlToValidate="txtLoginName" ErrorMessage="用户登录名不能为空" Font-Size="Larger" 
                            ForeColor="#990000" Width="16px">*</asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td style="width: 156px; text-align: center;">
                        <asp:Label ID="labSex" runat="server" Font-Size="12pt" ForeColor="White" 
                            Height="16px" Text="性 别" Width="58px"></asp:Label>
                    </td>
                    <td style="width: 344px; text-align: left;">
                        <asp:DropDownList ID="ddlSex" runat="server" Font-Bold="True" Font-Size="9pt" 
                            Width="56px">
                            <asp:ListItem>男</asp:ListItem>
                            <asp:ListItem>女</asp:ListItem>
                        </asp:DropDownList>
                    </td>
                    <td style="width: 33px">
                    </td>
                </tr>
                <tr>
                    <td style="width: 156px; height: 25px; text-align: center;">
                        <asp:Label ID="labPwd" runat="server" Font-Size="12pt" ForeColor="White" 
                            Height="16px" Text="密　码" Width="56px"></asp:Label>
                    </td>
                    <td style="width: 344px; text-align: left;">
                        <asp:TextBox ID="txtPwd" runat="server" Font-Size="9pt" TextMode="Password" 
                            Width="127px"></asp:TextBox>
                    </td>
                    <td style="width: 33px; height: 25px;">
                        <asp:RequiredFieldValidator ID="rfvPwd" runat="server" 
                            ControlToValidate="txtPwd" ErrorMessage="用户密码不能为空" Font-Size="Larger" 
                            ForeColor="Maroon" Width="10px">*</asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td style="width: 156px; text-align: center;">
                        <asp:Label ID="labSecPwd" runat="server" Font-Size="12pt" ForeColor="White" 
                            Height="16px" Text="重复密码" Width="80px"></asp:Label>
                    </td>
                    <td style="width: 344px; text-align: left;">
                        <asp:TextBox ID="txtSecPwd" runat="server" Font-Size="9pt" TextMode="Password" 
                            Width="127px"></asp:TextBox>
                    </td>
                    <td style="width: 33px">
                        <asp:CompareValidator ID="ccvPwd" runat="server" ControlToCompare="txtPwd" 
                            ControlToValidate="txtSecPwd" ErrorMessage="用户输入的密码必须一致" Font-Size="Larger" 
                            ForeColor="Maroon" Width="10px">*</asp:CompareValidator>
                    </td>
                </tr>
                <tr>
                    <td style="width: 156px; text-align: center;">
                        <asp:Label ID="labTName" runat="server" Font-Size="12pt" ForeColor="White" 
                            Text="真实姓名" Width="65px"></asp:Label>
                    </td>
                    <td style="width: 344px; text-align: left;">
                        <asp:TextBox ID="txtTName" runat="server" Font-Size="9pt"></asp:TextBox>
                    </td>
                    <td style="width: 33px">
                    </td>
                </tr>
                <tr>
                    <td style="width: 156px; text-align: center;">
                        <asp:Label ID="labQuePwd" runat="server" Font-Size="12pt" ForeColor="White" 
                            Height="16px" Text="密码问题" Width="83px"></asp:Label>
                    </td>
                    <td style="width: 344px; text-align: left;">
                        <asp:TextBox ID="txtQuePwd" runat="server" Font-Size="9pt"></asp:TextBox>
                    </td>
                    <td style="width: 33px">
                        <asp:RequiredFieldValidator ID="rfvQuePwd" runat="server" 
                            ControlToValidate="txtQuePwd" ErrorMessage="用户必须输入密码问题，以防造成不必要的损失" 
                            Font-Size="Larger" ForeColor="Maroon" Width="10px">*</asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td style="width: 156px; text-align: center;">
                        <asp:Label ID="labAnsPwd" runat="server" Font-Size="12pt" ForeColor="White" 
                            Text="密码提示答案" Width="111px"></asp:Label>
                    </td>
                    <td style="width: 344px; text-align: left;">
                        <asp:TextBox ID="txtAnsPwd" runat="server" Font-Size="9pt"></asp:TextBox>
                    </td>
                    <td style="width: 33px">
                        <asp:RequiredFieldValidator ID="rfvAnsPwd" runat="server" 
                            ControlToValidate="txtAnsPwd" ErrorMessage="用户必须输入密码问题的提示答案，以防造成不必要的损失" 
                            Font-Size="Larger" ForeColor="Maroon" Width="10px">*</asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td style="width: 156px; text-align: center;">
                        <asp:Label ID="labEmail" runat="server" Font-Size="12pt" ForeColor="White" 
                            Height="16px" Text="Email地址" Width="86px"></asp:Label>
                    </td>
                    <td style="width: 344px; text-align: left;">
                        <asp:TextBox ID="txtEmail" runat="server" Font-Size="9pt"></asp:TextBox>
                    </td>
                    <td style="width: 33px">
                        <asp:RegularExpressionValidator ID="revEmail" runat="server" 
                            ControlToValidate="txtEmail" ErrorMessage="用户输入的Email地址格式有误" Font-Size="Larger" 
                            ForeColor="Maroon" 
                            ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" 
                            Width="10px">*</asp:RegularExpressionValidator>
                    </td>
                </tr>
                <tr>
                    <td style="width: 156px; text-align: center; height: 25px;">
                    </td>
                    <td style="width: 344px; text-align: left; height: 25px;">
                        &nbsp; &nbsp;&nbsp;
                        <asp:Button ID="btnAdd" runat="server" Font-Size="9pt" OnClick="btnAdd_Click" 
                            Text="添加" Width="38px" />
                        &nbsp;
                        <asp:Button ID="btnCancel" runat="server" CausesValidation="False" 
                            Font-Size="9pt" OnClick="btnCancel_Click" Text="取消" />
                        &nbsp;&nbsp;
                    </td>
                    <td style="width: 33px; height: 25px;">
                    </td>
                </tr>
            </table>
            <br />
        </div>
        </asp:Content>

