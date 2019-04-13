<%@ Page Language="C#" MasterPageFile="~/User/guest.master" AutoEventWireup="true" CodeFile="RevertCard.aspx.cs" Inherits="User_RevertCard" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<p style="text-align: center"></p>
    <table cellpadding="0" cellspacing="0" 
        style="width: 445px; height: 205px; text-align: center" align="center">
        <tr>
            <td>
                <asp:Label ID="Label1" runat="server" Text="现在回帖"></asp:Label>
            </td>
        </tr>
        <tr>
            <td style="height: 131px">
                <asp:TextBox ID="txtRevertContent" runat="server" Height="121px" 
                    TextMode="MultiLine" Width="412px"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td>
                <asp:Button ID="btnRevert" runat="server" onclick="btnRevert_Click" Text="回复" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="取消" />
            </td>
        </tr>
    </table>
</asp:Content>

