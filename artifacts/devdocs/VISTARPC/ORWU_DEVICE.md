---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWU DEVICE<br/>
# ORWU DEVICE

Returns a list of print devices.

## Properties

Property | Value
--- | ---
Label | DEVICE
Routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [DEVICE^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Method Comment | Return a subset of entries from the Device file
Input Parameters | FROM, DIR
First Comment | {::nomarkdown}<pre><code> .LST(n)=IEN;Name^DisplayName^Location^RMar^PLen<br/> FROM=text to $O from, DIR=$O direction</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,IEN,CNT,SHOW,X S I=0,CNT=20<br/> I FROM["<" S FROM=$RE($P($RE(FROM),"<  ",2))<br/> F  Q:I'<CNT  S FROM=$O(^%ZIS(1,"B",FROM),DIR) Q:FROM=""  D<br/> . S IEN=0 F  S IEN=$O(^%ZIS(1,"B",FROM,IEN)) Q:'IEN  D<br/> .. N X0,X1,X90,X91,X95,XTYPE,XSTYPE,XTIME,ORA,ORPX,POP,ORPCNT<br/> .. Q:'$D(^%ZIS(1,IEN,0))  S X0=^(0),X1=$G(^(1)),X90=$G(^(90)),X91=$G(^(91)),X95=$G(^(95)),XSTYPE=$G(^("SUBTYPE")),XTIME=$G(^("TIME")),XTYPE=$G(^("TYPE"))<br/> .. I $E($G(^%ZIS(2,+XSTYPE,0)))'="P" Q  ;Printers only<br/> .. S X=$P(XTYPE,"^") I X'="TRM",X'="HG",X'="HFS",X'="CHAN" Q  ;Device Types<br/> .. S X=X0 I ($P(X,U,2)="0")!($P(X,U,12)=2) Q  ;Queuing allowed<br/> .. S X=+X90 I X,(X'>DT) Q  ;Out of Service<br/> .. I XTIME]"" S ORA=$P(XTIME,"^"),ORPX=$P($H,",",2),ORPCNT=ORPX\60#60+(ORPX\3600*100),ORPX=$P(ORA,"-",2) I ORPX'<ORA&(ORPCNT'>ORPX&(ORPCNT'<ORA))!(ORPX<ORA&(ORPCNT'<ORA!(ORPCNT'>ORPX))) Q  ;Prohibited Times<br/> .. S POP=0<br/> .. I X95]"" S ORPX=$G(DUZ(0)) I ORPX'="@" S POP=1 F ORA=1:1:$L(ORPX) I X95[$E(ORPX,ORA) S POP=0 Q<br/> .. Q:POP  ;Security check<br/> .. S SHOW=$P(X0,U) I SHOW'=FROM S SHOW=FROM_"  <"_SHOW_">"<br/> .. S I=I+1,Y(I)=IEN_";"_$P(X0,U)_U_SHOW_U_$P(X1,U)_U_$P(X91,U)_U_$P(X91,U,3)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}