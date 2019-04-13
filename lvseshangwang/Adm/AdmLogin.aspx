<%@ Page Language="C#" MasterPageFile="~/Adm/Master.master" AutoEventWireup="true" CodeFile="AdmLogin.aspx.cs" Inherits="Adm_AdmLogin" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<style type="text/css">
<!--
.login_main .content
{
float:left;
width:100px;
height:25px;
text-align: center;
 padding-top:15px;
}
.login_main .content01
{
float:left;
width:152px;
height:30px;
text-align: center;
 padding-top:10px;
}
.login_main .content02
{
float:left;
width:200px;
height:25px;
text-align: center;
 padding-top:15px;
}
-->
</style>
<div class="login" style="width:700px;height:400px;">

<div class="login_main" 
        
        
        style="margin-top:100px;margin-left:150px; width:511px; height:208px; float:left; text-align:center;">
<div class="content" >
    用户名：
</div>
<div class="content01">
<asp:TextBox ID="txtUserID" runat="server" Height="22px" Width="146px"></asp:TextBox>
</div>
<div class="content02">
         <asp:CustomValidator ID="RequiredFieldValidator1" runat="server" 
         ControlToValidate="txtUserID" ErrorMessage="账号不能为空"></asp:CustomValidator>
</div>
<div class="content">
         密&nbsp;&nbsp;&nbsp; 码：
</div>
<div class="content01">
         <asp:TextBox ID="txtPassword" runat="server" Height="21px" Width="146px" 
                TextMode="Password"></asp:TextBox>
</div>
<div class="content02">
          <asp:CustomValidator ID="RequiredFieldValidator2" runat="server" 
                ControlToValidate="txtPassword" ErrorMessage="密码不能为空"></asp:CustomValidator>
</div>
<div class="content">
            验证码：
</div>
<div class="content01">
            <asp:TextBox ID="txtValidateCode" runat="server" Height="24px" Width="147px"></asp:TextBox>
</div>
<div class="content02">
             <asp:Label ID="labValidateCode" runat="server" BackColor="#FFC0C0" 
                 Font-Size="12pt" Width="44px"></asp:Label>
             <asp:CustomValidator ID="RequiredFieldValidator3" runat="server" 
                ControlToValidate="txtValidateCode" ErrorMessage="必须填写验证吗"></asp:CustomValidator>
</div>
<div class="content">
</div>
<div class="content01">
             <asp:Button ID="btnLogin" runat="server" Height="30px" onclick="btnLogin_Click" 
                Text="登录" Width="47px" />
             &nbsp;&nbsp;&nbsp;&nbsp;
            <asp:Button ID="btnCancel" runat="server" Height="30px" 
                onclick="btnCancel_Click" style="margin-bottom: 0px" Text="取消" 
                 Width="47px" />
</div>
<div class="content02">
            <asp:HyperLink ID="HyperLink3" runat="server" 
                NavigateUrl="~/Adm/InsertUser.aspx" Width="100px">注册新用户</asp:HyperLink>
</div>
<div class="content">
</div>
<div class="content01">
            <asp:Label ID="lblMessage" runat="server"></asp:Label>
</div>
<div class="content02">
             <asp:HyperLink ID="HyperLink2" runat="server">返回</asp:HyperLink>
</div>
</div>
 </div>   
</asp:Content>

