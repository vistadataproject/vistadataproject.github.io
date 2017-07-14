---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRP LAB REPORT LISTS<br/>
# ORWRP LAB REPORT LISTS

This remote procedure call returns a list of lab reports,There are no input parameters fo this rpc.

## Properties

Property | Value
--- | ---
Label | LABLIST
Routine | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [LABLIST^ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
Method Comment | report list for labs tab
First Comment | {::nomarkdown}<pre><code>  RPC: ORWRP LAB REPORT LIST</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,J,X,X0,X2,CNT,EOF,IFN,ROOT,RPC,ORLIST,HEAD<br/> S EOF="$$END",ROOT=$NA(LST),(CNT,I)=0<br/> D SETITEM(ROOT,"[LAB REPORT LIST]")<br/> D GETLST^XPAR(.ORLIST,"ALL","ORWRP REPORT LAB LIST")<br/> F  S I=$O(ORLIST(I)) Q:'I  Q:'$D(^ORD(101.24,$P(ORLIST(I),"^",2),0))  S X0=^(0),X2=$G(^(2)) D<br/> . Q:$P(X0,"^",12)="L"<br/> . S RPC=$$GET1^DIQ(8994,+$P(X0,"^",13),.01),IFN=ORLIST(I),HEAD=$P(X0,"^")<br/> . I $L($P(X2,"^",3)) S HEAD=$P(X2,"^",3)<br/> . S X=$P(X0,"^",2)_"^"_HEAD_"^"_$P(X0,"^",3)_"^"_$P(X0,"^",12)_"^"_$P(X0,"^",7)_"^"_RPC_"^"_IFN<br/> . D SETITEM(.ROOT,X)<br/> D SETITEM(.ROOT,"$$END")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}