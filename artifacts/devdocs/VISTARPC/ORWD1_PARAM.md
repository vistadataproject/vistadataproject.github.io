---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWD1 PARAM
# ORWD1 PARAM

Returns the prompt and device parameters for Automated order prints

Property | Value
--- | ---
Label | PARAM
Routine | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LOC | LITERAL | 1 | true | Pointer to the Hospital location file where the prints are generatedfrom.



### MUMPS Method Description

Property | Value
--- | ---
Method | [PARAM^ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
Method Comment | Returns in &#x27;Y&#x27; the print parameters
Input Parameters | LOC
First Comment | {::nomarkdown}<pre><code>Y=Prompt for CC^Prompt for L ^Prompt for R ^Prompt for W ^CC device ^L Device ^R Device ^WC device<br/>Device Params returned in internal;external format, the rest are internal<br/>CC=Chart Copy<br/>L=Label<br/>R=Requisitions<br/>WC=Work Copy<br/>'Prompt for' values (internal):<br/>0 for no prompts- chart copy is automatically generated.<br/>1 to prompt for chart copy and ask which printer should be used.<br/>2 to prompt for chart copy and automatically print to the<br/>  printer defined in the CHART COPY PRINT DEVICE field.<br/>* don't print.<br/>LOC=Ptr to location ^SC(LOC,</code></pre>{:/}
Code | {::nomarkdown}<pre><code> Q:'$G(LOC)<br/> S Y=$$BLDIT(LOC)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}