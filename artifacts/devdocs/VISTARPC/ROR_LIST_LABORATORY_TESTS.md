---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ROR LIST LABORATORY TESTS
# ROR LIST LABORATORY TESTS

The ROR LIST LABORATORY TESTS remote procedure returns a list of laboratory tests (defined in the LABORATORY TEST file), which conform the criteria.

Property | Value
--- | ---
Label | LABTLIST
Routine | [RORRP018](http://code.osehra.org/dox/Routine_RORRP018_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SUBSCR | LITERAL |  |  | List of test subscripts separated by commas (internal values of the SUBSCRIPT field of the LABORATORY TEST file):   AU  Autopsy  BB  Blood Bank  CH  CHEM, HEM, TOX, SER, RIA, ETC.  CY  Cytology  EM  Electronic Microscopy  MI  Microbiology  SP  Surgical Pathology  WK  Workload  Only tests of the types defined by this parameter are selected by theremote procedure. By default ($G(SUBSCR)&#x3D;&quot;&quot;), all tests are selected.
PART | LITERAL | 30 |  | The partial match restriction.
FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   B  Backwards. Traverses the index in the opposite     direction of normal traversal.   P  Include panels (by default, the panels are     excluded from the list)
NUMBER | LITERAL |  |  | Maximum number of entries to return. A value of &quot;*&quot; or no value in this parameter designates all entries.
FROM | LITERAL |  |  | The index entry(s) from which to begin the list  ^01: FromName  ^02: FromIEN  For example, a FROM value of &quot;BI&quot; would list entries following BI. You canuse the 2-nd and 3-rd &quot;^&quot;- pieces of the Results[0] to continue thelisting in the subsequent procedure calls.  NOTE: The FROM value itself is not included in the      resulting list.  See description of the LIST^DIC for more details about the PART, NUMBERand FROM parameters.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}