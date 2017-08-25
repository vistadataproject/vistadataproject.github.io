---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQCN SVCLIST<br/>
# ORQQCN SVCLIST

Because the combo box on the Consults order dialog needs to include ashortlist at the top, a call was needed that returned the list of consultsservices alphabetically as a long list.  This is it.

## Properties

Property | Value
--- | ---
Label | SVCLIST
MUMPS Implementation | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
StartFrom | LITERAL | 24 | true | Starting service for the returned list, full or partial name.
Direction | LITERAL | 4 | true | Direction of the lookup.



## MUMPS Method Description

Property | Value
--- | ---
Method | [SVCLIST^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Method Comment | Return a set of consult services in long list format
Input Parameters | FROM, DIR
First Comment | {::nomarkdown}<pre><code> .ORY=returned list, FROM=text to $O from, DIR=$O direction,</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,IEN,CNT,Y,ORTMP,ORSVC,ORSTR<br/> S I=0,CNT=44,ORSVC=""<br/> D SVCTREE^ORQQCN2(.Y,1)<br/> F I=1:1  S ORSVC=$P($G(Y(I)),U,2) Q:ORSVC=""  D<br/> . S ORTMP(ORSVC)=Y(I)<br/> F I=1:1  Q:I=CNT  S FROM=$O(ORTMP(FROM),DIR) Q:FROM=""  D<br/> . S ORSTR=ORTMP(FROM)<br/> . S ORY(I)=ORSTR</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}