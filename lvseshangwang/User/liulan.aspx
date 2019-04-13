<%@ Page Language="C#" MasterPageFile="~/User/guest.master" AutoEventWireup="true" CodeFile="liulan.aspx.cs" Inherits="User_liulan" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <asp:GridView ID="GridView1" runat="server" AllowPaging="True" 
    AllowSorting="True" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" 
    Height="222px" Width="687px">
    <Columns>
        <asp:CommandField ShowSelectButton="True" />
        <asp:BoundField DataField="Name" HeaderText="Name" SortExpression="Name" />
        <asp:BoundField DataField="mail" HeaderText="mail" SortExpression="mail" />
        <asp:BoundField DataField="sex" HeaderText="sex" SortExpression="sex" />
        <asp:BoundField DataField="生日" HeaderText="生日" ReadOnly="True" 
            SortExpression="生日" />
        <asp:BoundField DataField="aihao" HeaderText="aihao" SortExpression="aihao" />
        <asp:BoundField DataField="liuyan" HeaderText="liuyan" 
            SortExpression="liuyan" />
    </Columns>
</asp:GridView>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" 
    ConnectionString="<%$ ConnectionStrings:WebDBJWSConnectionString %>" 
    SelectCommand="SELECT Name, mail, sex, nian + yue + ri AS 生日, aihao, liuyan FROM Guest ORDER BY ID">
</asp:SqlDataSource>
</asp:Content>

