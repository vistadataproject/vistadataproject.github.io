---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQPL EDIT LOAD
# ORQQPL EDIT LOAD

Return array of default fields and original fields - GMPFLD() and GMPORIG()

Property | Value
--- | ---
Label | EDLOAD
Routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IFN | LITERAL |  |  | IFN for problem
provider | LITERAL |  |  | 
vamc | LITERAL |  |  | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [EDLOAD^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
Method Comment | LOAD  EDIT ARRAYS
Input Parameters | DA
First Comment | {::nomarkdown}<pre><code> DA=problem IFN</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,GMPFLD,GMPORIG,GMPL<br/> D GETFLDS^GMPLEDT3(DA)<br/> S I=0<br/> D LOADFLDS(.RETURN,"GMPFLD","NEW",.I)<br/> D LOADFLDS(.RETURN,"GMPORIG","ORG",.I)<br/> K GMPFLD,GMPORIG,GMPL  ; should not have to do this</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}