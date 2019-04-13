<%@ Page Language="C#" MasterPageFile="~/Adm/Master.master" AutoEventWireup="true" CodeFile="RevertCard.aspx.cs" Inherits="Adm_RevertCard" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <p>
        <table align="center" cellpadding="0" cellspacing="0" 
            style="width: 611px; height: 325px">
            <tr>
                <td style="width: 81px">
                    &nbsp;</td>
                <td style="text-align: center; width: 426px">
                    现在回帖</td>
                <td>
                    &nbsp;</td>
            </tr>
            <tr>
                <td style="width: 81px">
                    &nbsp;</td>
                <td style="width: 426px">
                    <asp:TextBox ID="txtRevertContent" runat="server" Height="148px" 
                        TextMode="MultiLine" Width="422px"></asp:TextBox>
                </td>
                <td>
                    &nbsp;</td>
            </tr>
            <tr>
                <td style="width: 81px">
                    &nbsp;</td>
                <td style="width: 426px; text-align: center">
                    <asp:Button ID="btnRevert" runat="server" onclick="btnRevert_Click" Text="回复" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="取消" />
                </td>
                <td>
                    &nbsp;</td>
            </tr>
        </table>
        <br />
        <br />
        <br />
    </p>
</asp:Content>

