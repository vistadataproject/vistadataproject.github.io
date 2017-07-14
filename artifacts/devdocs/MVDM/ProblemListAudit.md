---
layout: default
title: MVDM
---

#### [Developer Documentation](../index) &#187; [MVDM](TableOfContents) &#187; ProblemListAudit<br/>
<a name="top"></a>
# ProblemListAudit

### Problem List Audit

Contains problem list audits

**Fileman ID:** 125.8

**Base VDM Class:** [Problem_List_Audit-125_8](../VDM/Problem_List_Audit-125_8)

## Property Summary

**Property Count:** 9

Type | Count
--- | ---
POINTER | 3
NUMERIC | 1
DATE-TIME | 1
STRING | 4

**Sub-Object Count:** 0


## Properties

Label/Field ID | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Problem**{::nomarkdown}<pre><code>  problem</code></pre>{:/} | POINTER | problem |  | INDEXED | 
**Field Number**{::nomarkdown}<pre><code>  fieldNumber</code></pre>{:/} | NUMERIC | field_number |  |  | 
**Modified Date**{::nomarkdown}<pre><code>  modifiedDate</code></pre>{:/} | DATE-TIME | date_time_modified | $NOW |  | 
**Who Modified**{::nomarkdown}<pre><code>  whoModified</code></pre>{:/} | POINTER | who_modified | $USERID |  | 
**Old Value**{::nomarkdown}<pre><code>  oldValue</code></pre>{:/} | STRING | old_value |  |  | 
**New Value**{::nomarkdown}<pre><code>  newValue</code></pre>{:/} | STRING | new_value |  |  | 
**Reason for Change**{::nomarkdown}<pre><code>  reason</code></pre>{:/} | STRING | reason_for_change |  |  | 
**Requesting Provider**{::nomarkdown}<pre><code>  requestingProvider</code></pre>{:/} | POINTER | requesting_provider | $USERID |  | 
**Old Problem Entry**{::nomarkdown}<pre><code>  oldProblemEntry</code></pre>{:/} | STRING | old_problem_entry |  |  | 

[&uarr; Return to top](#top)<br/>



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}