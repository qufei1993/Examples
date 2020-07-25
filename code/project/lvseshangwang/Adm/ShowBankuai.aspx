<%@ Page Language="C#" MasterPageFile="~/Adm/Master.master" AutoEventWireup="true" CodeFile="ShowBankuai.aspx.cs" Inherits="Adm_ShowBankuai" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <asp:DataList ID="DataList1" runat="server" DataKeyField="ID" 
        DataSourceID="SqlDataSource1" Height="340px" RepeatColumns="2" 
        Width="703px">
        <ItemTemplate>
            <table cellpadding="0" cellspacing="0" style="width: 215%; height: 90px">
                <tr>
                    <td rowspan="2" style="width: 103px">
                        <asp:Image ID="Image1" runat="server" Height="90px" 
                            ImageUrl='<%# Eval("Image") %>' Width="101px" />
                    </td>
                    <td>
                        <asp:HyperLink ID="HyperLink1" runat="server" 
                            NavigateUrl='<%# "~/Adm/LookCard.aspx?id="+Eval("Id") %>' 
                            Text='<%# Eval("Name") %>'></asp:HyperLink>
                        发帖数:<asp:Label ID="Label1" runat="server" Text='<%# Eval("CardCount") %>'></asp:Label>
                    </td>
                    <td>
                        &nbsp;</td>
                </tr>
                <tr>
                    <td>
                        新贴时间:<asp:Label ID="Label2" runat="server" Text='<%# Eval("newtime") %>'></asp:Label>
                    </td>
                    <td>
                        &nbsp;</td>
                </tr>
            </table>
            <br />
        </ItemTemplate>
    </asp:DataList>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:db_BBS_DataConnectionString %>" 
        SelectCommand="SELECT tb_Module.ID, tb_Module.Name, tb_Module.Image, COUNT(tb_Card.ID) AS CardCount, MAX(tb_Card.PublishDate) AS newtime FROM tb_Module LEFT OUTER JOIN tb_Card ON tb_Module.ID = tb_Card.ModuleID WHERE (tb_Card.Checked = 1) GROUP BY tb_Module.ID, tb_Module.Name, tb_Module.Image">
    </asp:SqlDataSource>
</asp:Content>

