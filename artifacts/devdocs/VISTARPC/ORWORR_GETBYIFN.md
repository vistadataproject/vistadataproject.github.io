---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWORR GETBYIFN
# ORWORR GETBYIFN

Returns the fields for a single order in the format:       1   2    3     4      5     6   7   8   9   10     11    12 .LST=~IFN^Grp^ActTm^StrtTm^StopTm^Sts^Sig^Nrs^Clk^PrvID^PrvNam^ActDA

Property | Value
--- | ---
Label | GETBYIFN
Routine | [ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [GETBYIFN^ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
Method Comment | procedure
Input Parameters | IFN
First Comment | {::nomarkdown}<pre><code> get fields for single order<br/> .LST(n)=described above in GET<br/>  IFN=internal entry # for order</code></pre>{:/}
Code | {::nomarkdown}<pre><code> I 'IFN Q<br/> N ACT,IDX,X0,X3,X8,PRV,ID,LN,TXT,STRT,STOP,CSTS,ACTID,ORIGVIEW,ORYD,TXTVW,DEA ;PKI<br/> S IDX=0,LST=0,ORYD=0<br/> S X0=$G(^OR(100,+IFN,0)),X3=$G(^(3))<br/> S ACT=$S($P(IFN,";",2):$P(IFN,";",2),$P(X3,U,7):$P(X3,U,7),1:1)<br/> S IFN=+IFN,X8=$G(^OR(100,IFN,8,ACT,0))</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}