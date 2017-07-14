---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXVB SUBCHK<br/>
# ORWDXVB SUBCHK

Check to see if selected test is a Blood Component or a Diagnostic Test.

## Properties

Property | Value
--- | ---
Label | SUBCHK
Routine | [ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [SUBCHK^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
Method Comment | Check to see if selected test is a Blood Component or a Diagnostic Test
Input Parameters | TSTNM
Code | {::nomarkdown}<pre><code> S OROOT=""<br/> Q:'$L($G(TSTNM))<br/> I $O(^ORD(101.43,"S.VBT",TSTNM,0)) S OROOT="t"<br/> I $O(^ORD(101.43,"S.VBC",TSTNM,0)) S OROOT="c"</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}