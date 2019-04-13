<%@ Page Language="C#" MasterPageFile="~/User/guest.master" AutoEventWireup="true" CodeFile="liuyan.aspx.cs" Inherits="User_liuyan" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div id="main" 
        style="width:705px; height:473px;" >
    
        <div class="rightbox">
      
      <div id="tab">
        <table width="547" height="404" border="0" align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td height="37" colspan="2"><div align="center"><span class="STYLE3">绿色留言</span></div></td>
          </tr>
          <tr>
            <td style="width: 188px; height: 30px"><div align="center"><span class="STYLE5">昵称：</span></div></td>
            <td width="369" style="height: 30px">
                <asp:TextBox ID="txtUser" runat="server" Height="20px" Width="150px"></asp:TextBox>
                            <asp:Label ID="lblUser" runat="server"></asp:Label>
                            </td>
          </tr>
          <tr>
            <td class="STYLE5" style="width: 188px; height: 35px"><div align="center">邮箱：</div></td>
            <td style="height: 35px">
                <asp:TextBox ID="txtemail" runat="server" Height="23px" Width="151px"></asp:TextBox>
                            </td>
          </tr>
          <tr>
            <td class="STYLE5" style="width: 188px; height: 30px"><div align="center">性别：</div></td>
            <td style="height: 30px">
                <asp:RadioButtonList ID="rdSex" runat="server" Height="26px" RepeatColumns="2" 
                    Width="114px">
                    <asp:ListItem>男</asp:ListItem>
                    <asp:ListItem>女</asp:ListItem>
                </asp:RadioButtonList>
              </td>
          </tr>
          <tr>
            <td style="width: 188px; height: 31px"><div align="center" class="STYLE5">生日：</div></td>
            <td style="height: 31px">
                <asp:DropDownList ID="DRnian" runat="server" Height="20px" Width="52px">
                    <asp:ListItem></asp:ListItem>
                    <asp:ListItem>1993</asp:ListItem>
                    <asp:ListItem>1994</asp:ListItem>
                    <asp:ListItem>1995</asp:ListItem>
                    <asp:ListItem>1996</asp:ListItem>
                    <asp:ListItem>1997</asp:ListItem>
                    <asp:ListItem>1998</asp:ListItem>
                    <asp:ListItem>1999</asp:ListItem>
                    <asp:ListItem>2000</asp:ListItem>
                    <asp:ListItem>2001</asp:ListItem>
                </asp:DropDownList>
                &nbsp;
                <asp:DropDownList ID="DRyue" runat="server" Height="20px" Width="44px">
                    <asp:ListItem>1</asp:ListItem>
                    <asp:ListItem>2</asp:ListItem>
                    <asp:ListItem>3</asp:ListItem>
                    <asp:ListItem>4</asp:ListItem>
                    <asp:ListItem>5</asp:ListItem>
                    <asp:ListItem>6</asp:ListItem>
                    <asp:ListItem>7</asp:ListItem>
                    <asp:ListItem>8</asp:ListItem>
                    <asp:ListItem>9</asp:ListItem>
                    <asp:ListItem>10</asp:ListItem>
                    <asp:ListItem>11</asp:ListItem>
                    <asp:ListItem>12</asp:ListItem>
                    <asp:ListItem></asp:ListItem>
                </asp:DropDownList>

                <asp:DropDownList ID="DRri" runat="server" Height="20px" Width="44px">
                    <asp:ListItem>1</asp:ListItem>
                    <asp:ListItem>2</asp:ListItem>
                    <asp:ListItem>3</asp:ListItem>
                    <asp:ListItem>4</asp:ListItem>
                    <asp:ListItem>5</asp:ListItem>
                    <asp:ListItem>6</asp:ListItem>
                    <asp:ListItem>7</asp:ListItem>
                    <asp:ListItem>8</asp:ListItem>
                    <asp:ListItem>9</asp:ListItem>
                    <asp:ListItem>10</asp:ListItem>
                    <asp:ListItem>11</asp:ListItem>
                    <asp:ListItem>12</asp:ListItem>
                    <asp:ListItem>13</asp:ListItem>
                    <asp:ListItem>14</asp:ListItem>
                    <asp:ListItem>15</asp:ListItem>
                    <asp:ListItem>16</asp:ListItem>
                    <asp:ListItem>17</asp:ListItem>
                    <asp:ListItem>18</asp:ListItem>
                    <asp:ListItem>19</asp:ListItem>
                    <asp:ListItem>20</asp:ListItem>
                    <asp:ListItem>21</asp:ListItem>
                    <asp:ListItem>22</asp:ListItem>
                    <asp:ListItem>23</asp:ListItem>
                    <asp:ListItem>24</asp:ListItem>
                    <asp:ListItem>25</asp:ListItem>
                    <asp:ListItem>26</asp:ListItem>
                    <asp:ListItem Value="27"></asp:ListItem>
                    <asp:ListItem>28</asp:ListItem>
                    <asp:ListItem>29</asp:ListItem>
                    <asp:ListItem>30</asp:ListItem>
                    <asp:ListItem></asp:ListItem>
                    <asp:ListItem>31</asp:ListItem>
                </asp:DropDownList>
                                        </td>
          </tr>
          <tr>
            <td style="width: 188px; height: 31px"><div align="right" class="STYLE5">
              <div class="style1" style="text-align: center">
                  爱好：</div></td>
            
  </div></td>
            
            <td style="height: 31px">
                <asp:CheckBoxList ID="CHaihao" runat="server" Height="29px" RepeatColumns="4" 
                    Width="249px">
                    <asp:ListItem>读书</asp:ListItem>
                    <asp:ListItem>音乐</asp:ListItem>
                    <asp:ListItem>舞蹈</asp:ListItem>
                    <asp:ListItem>跑步</asp:ListItem>
                </asp:CheckBoxList>
                                        </td>
          </tr>
          <tr>
            <td style="text-align: center; width: 188px; height: 117px">留言：</td>
            
            <td style="height: 117px">
                <asp:TextBox ID="txtliuyan" runat="server" Height="115px" TextMode="MultiLine" 
                    Width="274px"></asp:TextBox>
                                        </td>
          </tr>
          <tr>
            <td height="39" style="width: 188px">&nbsp;</td>
            
            <td>
                  <asp:Button ID="btok" runat="server" Text="提交" onclick="btok_Click1" 
                      style="height: 26px; width: 40px;" />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                  <asp:Button ID="btCancle" runat="server" Text="重设" onclick="btCancle_Click" />
                                        </td>
          </tr>
          </table>
      </div>
    
    </div>
    
    </div>
</asp:Content>

