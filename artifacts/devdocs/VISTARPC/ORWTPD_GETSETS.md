---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTPD GETSETS<br/>
# ORWTPD GETSETS



## Properties

Property | Value
--- | ---
Label | GETSETS
MUMPS Implementation | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETSETS^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
Method Comment | Get time/occ limit set for each report
Code | {::nomarkdown}<pre><code> N I,CNT,CAT,SEC<br/> S I=0,CNT=1,RST=""<br/> F  S I=$O(^ORD(101.24,I)) Q:'I   D<br/> . I $P($G(^ORD(101.24,I,0)),U,12)'="M" D<br/> .. S CAT=$P(^ORD(101.24,I,0),U,7),SEC=$P(^(0),U,8)<br/> .. I $S(CAT=1:1,CAT=6:1,1:0)!($P(^(0),U)="ORRP IMAGING") D<br/> ... D GETINDV(.RST,I)<br/> ... I $L($P(^ORD(101.24,I,2),U,4))>0 S Y(CNT)=I_U_$P(^(2),U,4)_" ["_SEC_"]"_U_RST<br/> ... E  S Y(CNT)=I_U_$P(^ORD(101.24,I,2),U,3)_" ["_SEC_"]"_U_RST<br/> ... S CNT=CNT+1<br/> K I,CNT,RST,CAT</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/fOptionsReportsCustom.pas">Options/fOptionsReportsCustom.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}