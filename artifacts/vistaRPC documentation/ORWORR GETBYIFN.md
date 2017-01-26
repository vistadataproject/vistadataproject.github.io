---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORR GETBYIFN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWORR GETBYIFN{:/}
 tag | {::nomarkdown}GETBYIFN{:/}
 routine | [ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the fields for a single order in the format:       1   2    3     4      5     6   7   8   9   10     11    12 .LST=~IFN^Grp^ActTm^StrtTm^StopTm^Sts^Sig^Nrs^Clk^PrvID^PrvNam^ActDA{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETBYIFN^[ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 Method comment | procedure
 Input parameters | {::nomarkdown}IFN{:/}
 First comment | {::nomarkdown}<pre> get fields for single order<br/> .LST(n)=described above in GET<br/>  IFN=internal entry # for order</pre>{:/}
 Code | {::nomarkdown}  I 'IFN Q<br> N ACT,IDX,X0,X3,X8,PRV,ID,LN,TXT,STRT,STOP,CSTS,ACTID,ORIGVIEW,ORYD,TXTVW,DEA ;PKI<br> S IDX=0,LST=0,ORYD=0<br> S X0=$G(^OR(100,+IFN,0)),X3=$G(^(3))<br> S ACT=$S($P(IFN,";",2):$P(IFN,";",2),$P(X3,U,7):$P(X3,U,7),1:1)<br> S IFN=+IFN,X8=$G(^OR(100,IFN,8,ACT,0)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}