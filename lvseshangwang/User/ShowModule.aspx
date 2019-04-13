<%@ Page Language="C#" MasterPageFile="~/User/guest.master" AutoEventWireup="true" CodeFile="ShowModule.aspx.cs" Inherits="User_ShowModule" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <p>
        <asp:HyperLink ID="HyperLink2" runat="server" 
            NavigateUrl="~/User/UserLogin.aspx">用户登录</asp:HyperLink>
    </p>
<p>
        <asp:DataList ID="DataList1" runat="server" DataKeyField="ID" 
            DataSourceID="SqlDataSource1" RepeatColumns="2">
            <ItemTemplate>
                <table cellpadding="0" cellspacing="0" style="width: 100%; height: 97px">
                    <tr>
                        <td rowspan="2" style="width: 30px">
                            <asp:Image ID="Image1" runat="server" Height="105px" 
                                ImageUrl='<%# Eval("Image") %>' Width="126px" />
                        </td>
                        <td>
                            <asp:HyperLink ID="HyperLink1" runat="server" 
                                NavigateUrl='<%# "~/User/LookCard.aspx?id="+Eval("Id") %>' 
                                Text='<%# Eval("Name") %>'></asp:HyperLink>
                            发帖总数：<asp:Label ID="Label1" runat="server" Text='<%# Eval("CardCount") %>'></asp:Label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            新帖时间：<asp:Label ID="Label2" runat="server" Text='<%# Eval("newtime") %>'></asp:Label>
                        </td>
                    </tr>
                </table>
   
            </ItemTemplate>
        </asp:DataList>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
            ConnectionString="<%$ ConnectionStrings:db_BBS_DataConnectionString %>" 
            SelectCommand="SELECT tb_Module.ID, tb_Module.Name, tb_Module.Image, COUNT(tb_Card.ID) AS CardCount, MAX(tb_Card.PublishDate) AS newtime FROM tb_Module LEFT OUTER JOIN tb_Card ON tb_Module.ID = tb_Card.ModuleID WHERE (tb_Card.Checked = 1) GROUP BY tb_Module.ID, tb_Module.Name, tb_Module.Image">
        </asp:SqlDataSource>
        <br />
    </p>
</asp:Content>

