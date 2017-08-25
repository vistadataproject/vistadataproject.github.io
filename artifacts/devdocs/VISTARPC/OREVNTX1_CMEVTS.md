---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OREVNTX1 CMEVTS<br/>
# OREVNTX1 CMEVTS



## Properties

Property | Value
--- | ---
Label | CMEVTS
MUMPS Implementation | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [CMEVTS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | Return common event list
Input Parameters | CLOC
Code | {::nomarkdown}<pre><code> N IDX,X0,X,LOC<br/> S:CLOC>0 LOC=CLOC<br/> S IDX=0,ORY=""<br/> D GETLST^OREV3(.ORY)<br/> F  S IDX=$O(ORY(IDX)) Q:'IDX  D<br/> . S X0=""<br/> . S:$L($G(^ORD(100.5,+ORY(IDX),0))) X0=$G(^(0))<br/> . I '$L($P(X0,U,2)) D<br/> .. S X=$P(X0,U,12) S:X $P(X0,U,2)=$P($G(^ORD(100.5,+X,0)),U,2)<br/> . S:$L(X0) ORY(IDX)=+ORY(IDX)_U_X0</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}