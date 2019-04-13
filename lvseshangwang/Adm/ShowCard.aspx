<%@ Page Language="C#" MasterPageFile="~/Adm/Master.master" AutoEventWireup="true" CodeFile="ShowCard.aspx.cs" Inherits="Adm_ShowCard" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <p>
        <table cellpadding="0" cellspacing="0" >
            <tr>
                <td>
                    <asp:LinkButton ID="LinkButton2" runat="server" onclick="LinkButton2_Click" 
                        style="text-align: center">返回</asp:LinkButton>
      
                    <asp:DataList ID="DataList1" runat="server" DataKeyField="ID" 
                        DataSourceID="SqlDataSource1" >
                        <ItemTemplate>
                            <table cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="text-align: right">
                                        <asp:Label ID="Label1" runat="server" Text='<%# Eval("UserID") %>'></asp:Label>
                                        发表于:[<asp:Label ID="Label2" runat="server" Text='<%# Eval("PublishDate") %>'></asp:Label>
                                        ]</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center">
                                        主题<asp:Label ID="Label3" runat="server" Text='<%# Eval("Name") %>'></asp:Label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <asp:TextBox ID="TextBox1" runat="server" ReadOnly="True" 
                                            TextMode="MultiLine" Width="420px" Text='<%# Eval("Content") %>'></asp:TextBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <asp:LinkButton ID="LinkButton1" runat="server" onclick="LinkButton1_Click" 
                                            style="text-align: center">我要回帖</asp:LinkButton>
                                    </td>
                                </tr>
                            </table>
                        </ItemTemplate>
                    </asp:DataList>
                    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
                        ConnectionString="<%$ ConnectionStrings:db_BBS_DataConnectionString %>" SelectCommand="SELECT UserID, Name, [Content], PublishDate, ID FROM tb_Card WHERE (ID = @CardID)
">
                        <SelectParameters>
                            <asp:QueryStringParameter Name="CardID" QueryStringField="id" />
                        </SelectParameters>
                    </asp:SqlDataSource>
                </td>
            </tr>
            <tr>
                <td style="height: 20px">
                    <asp:DataList ID="DataList2" runat="server" Height="200px">
                        <ItemTemplate>
                            <table cellpadding="0" cellspacing="0" 
    style="width: 100%">
                                <tr>
                                    <td style="height: 19px">
                                        回复时间：<asp:Label ID="Label4" runat="server" Text='<%# Eval("RevertDate") %>'></asp:Label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <asp:Label ID="Label5" runat="server" 
                                            Text='<%# Eval("Content") %>' Width="428px"></asp:Label>
                                    </td>
                                </tr>
                            </table>
                        </ItemTemplate>
                    </asp:DataList>
                </td>
            </tr>
            <tr>
                <td>
                    当前页码为：[<asp:Label ID="labPage" runat="server" Text="1"></asp:Label>
                    ]总页码为：[<asp:Label ID="labBackPage" runat="server"></asp:Label>
                    ]<asp:LinkButton ID="lnkbtnOne" runat="server" onclick="lnkbtnOne_Click">第一页</asp:LinkButton>
                    &nbsp;
                    <asp:LinkButton ID="lnkbtnUp" runat="server" onclick="lnkbtnUp_Click">上一页</asp:LinkButton>
                    &nbsp;
                    <asp:LinkButton ID="lnkbtnNext" runat="server" onclick="lnkbtnNext_Click">下一页</asp:LinkButton>
                    &nbsp;
                    <asp:LinkButton ID="lnkbtnBack" runat="server" onclick="lnkbtnBack_Click">最后一页</asp:LinkButton>
                </td>
            </tr>
        </table>
        <br />
        <br />
    </p>
</asp:Content>

