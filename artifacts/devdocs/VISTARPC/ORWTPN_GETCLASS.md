---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTPN GETCLASS<br/>
# ORWTPN GETCLASS



## Properties

Property | Value
--- | ---
Label | GETCLASS
MUMPS Implementation | [ORWTPN](http://code.osehra.org/dox/Routine_ORWTPN_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETCLASS^ORWTPN](http://code.osehra.org/dox/Routine_ORWTPN_source.html)
Method Comment | RPC
First Comment | {::nomarkdown}<pre><code> get available document classes</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N CNT,NODE,NUM K VALUES<br/> S CNT=0<br/> S NUM=0 F  S NUM=$O(^TIU(8925.1,"AT","CL",NUM)) Q:NUM<1  D<br/> .I '$$CLASPICK^TIULA4(38,NUM,"CL") Q<br/> .S NODE=$G(^TIU(8925.1,NUM,0))<br/> .I '$L(NODE) Q<br/> .S CNT=CNT+1<br/> .S VALUES(CNT)=NUM_U_NODE</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}