<%@ Page Language="C#" MasterPageFile="~/User/guest.master" AutoEventWireup="true" CodeFile="liuyan02.aspx.cs" Inherits="User_liuyan02" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div id="main" 
        style="width:708px; height:476px;" >
       <div class="rightbox">
       <div class="content" style="text-align:left;margin-left:200px;margin-top:30px;">
           <asp:DataList ID="DataList1" runat="server" DataSourceID="SqlDataSource1" 
               RepeatColumns="1">
               <ItemTemplate>
                   <table cellpadding="0" cellspacing="0" 
                       style="width: 350px; height: 306px; margin-bottom: 0px;">
                       <tr>
                           <td colspan="2" 
                               style="height: 69px; color: #006600; text-align: center; font-size: xx-large;">
                               留言成功</td>
                       </tr>
                       <tr>
                           <td style="height: 39px; width: 168px; text-align: center; font-size: large; font-family: 幼圆;">
                             
                                   昵称
                           </td>
                           <td style="height: 39px">
                               <asp:Label ID="Label1" runat="server" Text='<%# Eval("Name") %>'></asp:Label>
                           </td>
                       </tr>
                       <tr>
                           <td style="width: 168px; text-align: center; font-family: 幼圆; font-size: large;">
                              
                                   邮箱
                           </td>
                           <td>
                               <asp:Label ID="Label2" runat="server" Text='<%# Eval("mail") %>'></asp:Label>
                           </td>
                       </tr>
                       <tr>
                           <td style="width: 168px; text-align: center; font-size: large; font-family: 幼圆; height: 37px;">
                               
                                   性别
                           </td>
                           <td style="height: 37px">
                               <asp:Label ID="Label3" runat="server" Text='<%# Eval("sex") %>'></asp:Label>
                           </td>
                       </tr>
                       <tr>
                           <td style="width: 168px; text-align: center; font-size: large; font-family: 幼圆;">
                               
                                   生日
                           </td>
                           <td>
                               <asp:Label ID="Label4" runat="server" Text='<%# Eval("生日") %>'></asp:Label>
                           </td>
                       </tr>
                       <tr>
                           <td style="width: 168px; text-align: center; font-size: large; font-family: 幼圆; height: 36px;">
                               
                                   爱好
                           </td>
                           <td style="height: 36px">
                               <asp:Label ID="Label5" runat="server" Text='<%# Eval("aihao") %>'></asp:Label>
                           </td>
                       </tr>
                       <tr>
                           <td style="width: 168px; height: 33px; text-align: center; font-size: large; font-family: 幼圆;">
                              
                                   留言
                           </td>
                           <td style="height: 33px">
                               <asp:Label ID="Label6" runat="server" Text='<%# Eval("liuyan") %>'></asp:Label>
                           </td>
                       </tr>
                       <tr>
                           <td style="width: 168px">
                               &nbsp;</td>
                           <td>
                               <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/User/liuyan.aspx">返回</asp:HyperLink>
                           </td>
                       </tr>
                   </table>
                   <br />
               </ItemTemplate>
           </asp:DataList>
           <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
               ConnectionString="<%$ ConnectionStrings:WebDBJWSConnectionString %>" 
               
               SelectCommand="SELECT TOP (1) Name, mail, sex, nian + '-' + yue + '-' + ri AS 生日, aihao, liuyan FROM Guest ORDER BY ID DESC">
           </asp:SqlDataSource>
       
       </div>
      </div>
        </div>
</asp:Content>

