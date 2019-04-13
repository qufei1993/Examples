<%@ Page Language="C#" MasterPageFile="~/User/guest.master" AutoEventWireup="true" CodeFile="ShowCard.aspx.cs" Inherits="User_ShowCard" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <table cellpadding="0" cellspacing="0" style="width: 707px; height: 347px">
        <tr>
            <td style="height: 74px">
            <asp:LinkButton ID="LinkButton3" runat="server" ForeColor="#80FF80" OnClick="LinkButton2_Click">返回</asp:LinkButton>
            
                <asp:DataList ID="DataList1" runat="server" DataKeyField="ID" 
                    DataSourceID="SqlDataSource1" style="text-align: center">
                    <ItemTemplate>
                        <table cellpadding="0" cellspacing="0" ">
                            <tr>
                                <td style="text-align: right">
                                    <asp:Label ID="Label1" runat="server" Text='<%# Eval("UserID") %>'></asp:Label>
                                    &nbsp;发表于：<asp:Label ID="Label2" runat="server" 
                                        Text='<%# Eval("PublishDate") %>'></asp:Label>
                                </td>
                            </tr>
                            <tr>
                                <td style="height: 31px; text-align: center">
                                    主题：<asp:Label ID="Label3" runat="server" Text='<%# Eval("Name") %>'></asp:Label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <asp:TextBox ID="TextBox1" runat="server" Height="69px" 
                                        style="text-align: center" TextMode="MultiLine" Width="625px" 
                                        Text='<%# Eval("Content") %>'></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <asp:LinkButton ID="LinkButton1" runat="server"  style="text-align: center" 
                                        onclick="LinkButton1_Click">我要发帖</asp:LinkButton>
                                </td>
                            </tr>
                        </table>
                        <br />
                    </ItemTemplate>
                </asp:DataList>
                <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
                    ConnectionString="<%$ ConnectionStrings:db_BBS_DataConnectionString %>" 
                    SelectCommand="SELECT UserID, Name, [Content], PublishDate, ID FROM tb_Card WHERE (ID = @CardID)">
                    <SelectParameters>
                        <asp:QueryStringParameter DefaultValue="" Name="CardID" QueryStringField="id" />
                    </SelectParameters>
                </asp:SqlDataSource>
            </td>
        </tr>
        <tr>
            <td>
                <asp:DataList ID="DataList2" runat="server" style="text-align: center">
                    <ItemTemplate>
                        <table cellpadding="0" cellspacing="0" 
    >
                            <tr>
                                <td style="text-align: left">
                                    回复时间：<asp:Label ID="Label4" runat="server" Text='<%# Eval("RevertDate") %>'></asp:Label>
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: left"  >
                                    <asp:Label ID="Label5" runat="server"  
                                        Text='<%# Eval("Content") %>' Width="614px"></asp:Label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    &nbsp;</td>
                            </tr>
                        </table>
                    </ItemTemplate>
                </asp:DataList>
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label6" runat="server" Text="当前页码为"></asp:Label>
                ：【<asp:Label ID="labPage" runat="server" Text="1"></asp:Label>
                】<asp:Label ID="Label7" runat="server" Text="总页码为："></asp:Label>
                【<asp:Label ID="labBackPage" runat="server"></asp:Label>
                】<asp:LinkButton ID="lnkbtnOne" runat="server" onclick="lnkbtnOne_Click">第一页</asp:LinkButton>
                <asp:LinkButton ID="lnkbtnUp" runat="server" onclick="lnkbtnUp_Click">上一页</asp:LinkButton>
                <asp:LinkButton ID="lnkbtnNext" runat="server" onclick="lnkbtnNext_Click">下一页</asp:LinkButton>
                <asp:LinkButton ID="lnkbtnBack" runat="server" onclick="lnkbtnBack_Click">最后一页</asp:LinkButton>
            </td>
        </tr>
    </table>
</asp:Content>

