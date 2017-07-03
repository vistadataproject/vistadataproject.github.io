---
layout: default
title: MVDM
---

## [MVDM](TableOfContents) &#8594; ProblemListAudit
# Problem List Audit
Contains problem list audits

<dl>
<dt>File Type</dt><dd>125.8</dd>
<dt>Base VDM Class</dt><dd>Problem_List_Audit-125_8</dd>
</dl>

### From VDM
<dl>
<dt>Queries</dt><dd>Problem_List_Audit-125_8: <pre><code>DESCRIBE $ID</code></pre>
</dd>
<dt>List</dt><dd><pre><code>SELECT 125_8</code></pre></dd>
<dt>List Per Patient</dt><dd><pre><code></code></pre></dd>
</dl>


### Property Summary

Property Count: **9**

Sub-Object Count: **0**

Type | Count
--- | ---
POINTER | 3
NUMERIC | 1
DATE-TIME | 1
STRING | 4

### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
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



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}