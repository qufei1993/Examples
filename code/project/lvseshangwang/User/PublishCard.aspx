<%@ Page Language="C#" MasterPageFile="~/User/guest.master" AutoEventWireup="true" CodeFile="PublishCard.aspx.cs" Inherits="User_PublishCard" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
  
        <table cellpadding="0" cellspacing="0" 
            style="width: 562px; border: 1px solid #008000; height: 341px;" 
            align="center">
            <tr>
                <td style="width: 159px; text-align: center; font-size: x-large;">
                    标题</td>
                <td style="width: 360px">
                    <asp:TextBox ID="txtCardName" runat="server" Height="37px" Width="365px"></asp:TextBox>
                </td>
                <td style="width: 35px">
                    &nbsp;</td>
            </tr>
            <tr>
                <td style="width: 159px; text-align: center; font-size: x-large;">
                    内容</td>
                <td style="width: 360px">
                    <asp:TextBox ID="txtCardContent" runat="server" Height="182px" Width="359px" 
                        TextMode="MultiLine"></asp:TextBox>
                </td>
                <td style="width: 35px">
                    &nbsp;</td>
            </tr>
            <tr>
                <td style="width: 159px; height: 19px;">
                    </td>
                <td style="width: 360px; height: 19px">
                    <br />
                    <asp:Button ID="btnDeliver" runat="server" Font-Size="18px" Height="29px" 
                        Text="发表" Width="57px" onclick="btnDeliver_Click" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <asp:Button ID="btnCancel" runat="server" Font-Size="18px" Height="28px" 
                        Text="返回" Width="49px" onclick="btnCancel_Click" />
                    <br />
                    <br />
                </td>
                <td style="height: 19px; width: 35px;">
                    </td>
            </tr>
        </table>
        <br />
   
    <p>
    </p>
    <p>
    </p>
    <p>
    </p>
</asp:Content>

