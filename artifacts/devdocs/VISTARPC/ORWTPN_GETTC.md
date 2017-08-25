---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTPN GETTC<br/>
# ORWTPN GETTC



## Properties

Property | Value
--- | ---
Label | GETTC
MUMPS Implementation | [ORWTPN](http://code.osehra.org/dox/Routine_ORWTPN_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETTC^ORWTPN](http://code.osehra.org/dox/Routine_ORWTPN_source.html)
Method Comment | RPC
Input Parameters | CLASS, FROM, DIR
First Comment | {::nomarkdown}<pre><code> get titles for a class</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N CNT,IEN,NODE,NUM K VALUES<br/> S CNT=44,NUM=0<br/> F  Q:NUM>CNT  S FROM=$O(^TIU(8925.1,"B",FROM),DIR) Q:FROM=""  D<br/> .S IEN=0 F  S IEN=$O(^TIU(8925.1,"B",FROM,IEN)) Q:IEN<1  D<br/> ..I '$D(^TIU(8925.1,"AT","DOC",IEN)) Q<br/> ..I '$$ISA^TIULX(IEN,CLASS) Q<br/> ..I '$$CANPICK^TIULP(IEN) Q<br/> ..I '$$CANENTR^TIULP(IEN) Q<br/> ..S NODE=$G(^TIU(8925.1,IEN,0))<br/> ..I '$L(NODE) Q<br/> ..S NUM=NUM+1<br/> ..S VALUES(NUM)=IEN_U_NODE</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}