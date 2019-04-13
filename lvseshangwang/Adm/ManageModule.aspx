<%@ Page Language="C#" MasterPageFile="~/Adm/Master.master" AutoEventWireup="true" CodeFile="ManageModule.aspx.cs" Inherits="Adm_ManageModule" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <p>
    <table cellpadding="0" cellspacing="0" style="width: 642px; height: 279px">
        <tr>
            <td style="width: 218px">
                &nbsp;</td>
            <td style="width: 250px">
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td style="width: 218px">
                &nbsp;</td>
            <td style="width: 250px">
                <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
                    ConnectionString="<%$ ConnectionStrings:db_BBS_DataConnectionString %>" 
                    DeleteCommand="DELETE FROM [tb_Module] WHERE [ID] = @ID" 
                    InsertCommand="INSERT INTO [tb_Module] ([Name], [CreatDate]) VALUES (@Name, @CreatDate)" 
                    SelectCommand="SELECT [ID], [Name], [CreatDate] FROM [tb_Module]" 
                    UpdateCommand="UPDATE [tb_Module] SET [Name] = @Name, [CreatDate] = @CreatDate WHERE [ID] = @ID">
                    <DeleteParameters>
                        <asp:Parameter Name="ID" Type="Int64" />
                    </DeleteParameters>
                    <UpdateParameters>
                        <asp:Parameter Name="Name" Type="String" />
                        <asp:Parameter Name="CreatDate" Type="DateTime" />
                        <asp:Parameter Name="ID" Type="Int64" />
                    </UpdateParameters>
                    <InsertParameters>
                        <asp:Parameter Name="Name" Type="String" />
                        <asp:Parameter Name="CreatDate" Type="DateTime" />
                    </InsertParameters>
                </asp:SqlDataSource>
                <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" 
                    DataKeyNames="ID" DataSourceID="SqlDataSource1" Height="130px" 
                    style="margin-left: 45px" Width="482px">
                    <Columns>
                        <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" />
                        <asp:BoundField DataField="ID" HeaderText="编号" InsertVisible="False" 
                            ReadOnly="True" SortExpression="ID" />
                        <asp:BoundField DataField="Name" HeaderText="版块名称" SortExpression="Name" />
                        <asp:BoundField DataField="CreatDate" HeaderText="创建时间" 
                            SortExpression="CreatDate" />
                    </Columns>
                    <HeaderStyle BackColor="#339933" />
                </asp:GridView>
            </td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td style="width: 218px">
                &nbsp;</td>
            <td style="width: 250px">
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td style="width: 218px">
                &nbsp;</td>
            <td style="width: 250px">
                <asp:LinkButton ID="LinkButton1" runat="server" onclick="LinkButton1_Click">添加板块</asp:LinkButton>
                <asp:Panel ID="Panel1" runat="server">
                    <asp:FormView ID="FormView2" runat="server" DataSourceID="SqlDataSource1" 
                        DefaultMode="Insert" onpageindexchanging="FormView2_PageIndexChanging">
                        <InsertItemTemplate>
                            版块名称：<asp:TextBox ID="NameTextBox" runat="server"></asp:TextBox>
                            <br />
                            创建时间：<asp:TextBox ID="CreatDateTextBox" runat="server" Height="22px"></asp:TextBox>
                        </InsertItemTemplate>
                    </asp:FormView>
                    <asp:LinkButton ID="InsertButton" runat="server">插入</asp:LinkButton>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <asp:LinkButton ID="InsertCancelButton" runat="server">取消</asp:LinkButton>
                    <br />
                </asp:Panel>
            </td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td style="width: 218px">
                &nbsp;</td>
            <td style="width: 250px">
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td style="width: 218px">
                &nbsp;</td>
            <td style="width: 250px">
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
    </table>
    <br />
</p>
<p style="height: 101px; width: 692px">
</p>
</asp:Content>

