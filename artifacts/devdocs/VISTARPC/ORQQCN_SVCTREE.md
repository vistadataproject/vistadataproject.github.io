---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQCN SVCTREE
# ORQQCN SVCTREE

Returns a specially formatted list of consult services for use inpopulating a GUI TreeView control.

Property | Value
--- | ---
Label | SVCTREE
Routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PURPOSE | LITERAL | 16 | true | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [SVCTREE^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Method Comment | Returns list of consult service for current
Input Parameters | PURPOSE
First Comment | {::nomarkdown}<pre><code>  context, screening for inactive, groupers, and tracking<br/> PURPOSE: Display=0, Forward=1, Order=1</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N GMRCTO,GMRCDG,GMRCSVC,GMRCOI<br/>  S GMRCTO=PURPOSE,GMRCDG=1<br/> D SERV1^GMRCASV<br/> S GMRCSVC=0<br/> I '$D(^TMP("GMRCSLIST",$J)) S Y(1)="-1^No services found" Q  ;DBIA 2426<br/> F I=1:1  S GMRCSVC=$O(^TMP("GMRCSLIST",$J,GMRCSVC)) Q:+GMRCSVC=0  D<br/> . S Y(I)=^TMP("GMRCSLIST",$J,GMRCSVC)<br/> . S GMRCOI=$O(^ORD(101.43,"ID",$P(Y(I),U,1)_";99CON",0))<br/> . S Y(I)=Y(I)_U_GMRCOI</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}