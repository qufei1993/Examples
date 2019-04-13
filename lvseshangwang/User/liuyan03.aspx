<%@ Page Language="C#" MasterPageFile="~/User/guest.master" AutoEventWireup="true" CodeFile="liuyan03.aspx.cs" Inherits="User_liuyan03" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div id="main" 
        style="width:704px; height:473px;" >
    
        <div class="rightbox">
      
      <div id="tab">
        <table border="0" align="center" cellpadding="0" cellspacing="0" 
              style="height: 397px; width: 552px;">
          <tr>
            <td style="height: 13px"><div align="center"><span class="STYLE3">留言成功</span></div></td>
          </tr>
          <tr>
            <td style="padding-left:150px;">&nbsp;<asp:DetailsView ID="DetailsView1" runat="server" Height="310px" 
                    Width="262px" AutoGenerateRows="False" DataSourceID="SqlDataSource1" 
                    style="text-align: left">
                <Fields>
                    <asp:BoundField DataField="Name" HeaderText="昵称" SortExpression="Name" />
                    <asp:BoundField DataField="mail" HeaderText="邮箱" SortExpression="mail" />
                    <asp:BoundField DataField="sex" HeaderText="性别" SortExpression="sex" />
                    <asp:BoundField DataField="生日" HeaderText="生日" ReadOnly="True" 
                        SortExpression="生日" />
                    <asp:BoundField DataField="aihao" HeaderText="爱好" SortExpression="aihao" />
                    <asp:BoundField DataField="liuyan" HeaderText="留言" 
                        SortExpression="liuyan" />
                </Fields>
                </asp:DetailsView>
                <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
                    ConnectionString="<%$ ConnectionStrings:WebDBJWSConnectionString %>" 
                    SelectCommand="SELECT TOP (1) Name, mail, sex, nian + yue + ri AS 生日, aihao, liuyan FROM Guest ORDER BY ID DESC">
                </asp:SqlDataSource>
                <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/User/liuyan.aspx">返回</asp:HyperLink>
                </td>
          </tr>
          </table>
          </div>
      </div>
    
    </div>
</asp:Content>

