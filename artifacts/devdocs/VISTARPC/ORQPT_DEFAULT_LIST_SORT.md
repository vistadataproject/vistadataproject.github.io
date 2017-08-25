---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQPT DEFAULT LIST SORT<br/>
# ORQPT DEFAULT LIST SORT

Returns the current user's default patient selection list SORT ORDERsetting.

## Properties

Property | Value
--- | ---
Label | DEFSORT
MUMPS Implementation | [ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [DEFSORT^ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
Method Comment | Return user&#x27;s default sort.
First Comment | {::nomarkdown}<pre><code> SLC/PKS - 4/6/2001<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORSORT,ORSECT,ORPARAM<br/> I ('$D(DUZ)) S Y="Unable to determine DUZ." Q<br/> S ORSECT=$G(^VA(200,DUZ,5))<br/> I +ORSECT>0 S ORSECT=$P(ORSECT,U)<br/> S Y="A" ; Default of "Alpha" sort.<br/> S ORPARAM="ORLP DEFAULT LIST ORDER"<br/> S ORSORT=$$GET^XPAR("USR^SRV.`"_$G(ORSECT)_"^DIV^SYS^PKG",ORPARAM,1,"I")<br/> I (ORSORT'="") S Y=ORSORT</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}