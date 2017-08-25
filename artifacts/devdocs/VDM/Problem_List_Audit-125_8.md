---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Problem_List_Audit-125_8<br/>
<a name="top"></a>
# Problem List Audit (125.8)
This file holds an audit trail of all changes made to the Problem List entries including the old and new values, who made the change, and why.  Each entry here represents a single change to one problem.

**Global:** ^GMPL(125.8,

**Domain:** Problems

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Problem**{::nomarkdown}<pre><code>  problem</code></pre>{:/} | .01 | This is the problem for which a change is being recorded. | POINTER | INDEXED<br/>REQUIRED | [Problem-9000011](Problem-9000011)
**Field Number**{::nomarkdown}<pre><code>  field_number</code></pre>{:/} | 1 | This is the number of the field for which a change is being recorded. | NUMERIC | REQUIRED | 
**Date/time Modified**{::nomarkdown}<pre><code>  date_time_modified</code></pre>{:/} | 2 | This is the date and time that this data was changed. | DATE-TIME | REQUIRED | 
**Who Modified**{::nomarkdown}<pre><code>  who_modified</code></pre>{:/} | 3 | This is the user who actually made the change to this data; the current<br/>user's DUZ is stuffed in here. | POINTER |  | [New_Person-200](New_Person-200)
**Old Value**{::nomarkdown}<pre><code>  old_value</code></pre>{:/} | 4 | This is the original value as stored in the Problem file global<br/>(internal format). | STRING |  | 
**New Value**{::nomarkdown}<pre><code>  new_value</code></pre>{:/} | 5 | This is the new value now stored in the Problem file global (internal<br/>format). | STRING |  | 
**Reason For Change**{::nomarkdown}<pre><code>  reason_for_change</code></pre>{:/} | 6 | This is the description of why the change was made, if known. | STRING |  | 
**Requesting Provider**{::nomarkdown}<pre><code>  requesting_provider</code></pre>{:/} | 7 | This is the provider who either changed this data, or directed it to be<br/>changed. | POINTER |  | [New_Person-200](New_Person-200)
**Old Problem Entry**{::nomarkdown}<pre><code>  old_problem_entry</code></pre>{:/} | 10 | This is the entire problem entry (internal format) as it existed prior<br/>to changing this data. | STRING |  | 

[&uarr; Return to top](#top)<br/>



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}