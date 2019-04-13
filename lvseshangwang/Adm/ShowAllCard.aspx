<%@ Page Language="C#" MasterPageFile="~/Adm/Master.master" AutoEventWireup="true" CodeFile="ShowAllCard.aspx.cs" Inherits="Adm_ShowAllCard" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <p>
        <asp:GridView ID="GridView1" runat="server" AllowPaging="True" 
            AllowSorting="True" AutoGenerateColumns="False" DataSourceID="SqlDataSource1">
            <Columns>
                <asp:BoundField DataField="Name" HeaderText="所属版块" SortExpression="Name" />
                <asp:BoundField DataField="UserID" HeaderText="发帖人" SortExpression="UserID" />
                <asp:BoundField DataField="cardname" HeaderText="标题" 
                    SortExpression="cardname" />
                <asp:BoundField DataField="PublishDate" HeaderText="发帖时间" 
                    SortExpression="PublishDate" />
                <asp:CheckBoxField DataField="Checked" HeaderText="是否审核" 
                    SortExpression="Checked" />
            </Columns>
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
            ConnectionString="<%$ ConnectionStrings:db_BBS_DataConnectionString %>" SelectCommand="SELECT tb_Module.Name, tb_Card.UserID, tb_Card.Name AS cardname, tb_Card.PublishDate, tb_Card.Checked FROM tb_Card INNER JOIN tb_Module ON tb_Card.ModuleID = tb_Module.ID
"></asp:SqlDataSource>
        <br />
        <br />
    </p>
</asp:Content>

