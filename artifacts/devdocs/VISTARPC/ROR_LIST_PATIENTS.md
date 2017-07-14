---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR LIST PATIENTS<br/>
# ROR LIST PATIENTS

The ROR LIST PATIENTS remote procedure returns either a list patients fromthe PATIENT file (#2) or a list of registry patients who conform theprovided criteria.

## Properties

Property | Value
--- | ---
Label | PTLIST
Routine | [RORRP019](http://code.osehra.org/dox/Routine_RORRP019_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).
DATE | LITERAL |  |  | Patients who were confirmed in the registry before the date defined by theDATE parameter will be skipped by the query (if the FLAGS parametercontains the &#x27;C&#x27; flag).
PART | LITERAL | 30 |  | The PART parameter defines the search pattern. It can contain last 4 digits of the patient&#x27;s SSN, the first letter of the patient&#x27;s last nameand last four digits of the SSN, the full SSN, the beginning of thepatient name, or the &#x27;#&#x27; character followed by the coded SSN (11 digitsand optional &#x27;P&#x27; character).                                      If the &#x27;P&#x27; flag is defined (see the FLAGS parameter), the PART parametershould contain either the beginning of the patient name or an emptystring. If this parameter is a number preceded by the &#x27;&#x60;&#x27; then a list containingonly the patient with this IEN is compiled.
FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):    2  Search in the PATIENT file. By default, the          ROR LOCAL REGISTRY and ROR PATIENT files are     queried. This flag overrides the &#x27;D&#x27; and &#x27;P&#x27;     flags.   B  Backwards. Traverses the index in the opposite     direction of normal traversal.   D  Ignore those patients who were added to the     registry before the date defined by the DATE     parameter.   O  Return values of the optional fields   P  Include only pending patients   P  Include only pending patients
NUMBER | LITERAL |  |  | Maximum number of entries to return. A value of &quot;*&quot; or no value in this parameter designates all entries that conform the criteria.
FROM | LITERAL |  |  | The index entry(s) from which to begin the list. Use the pieces of theResults[0] (starting from the second one) to continue the listing in thesubsequent procedure calls. NOTE: The FROM value itself is not included in the      resulting list. See description of the LIST^DIC for more details about the PART, NUMBERand FROM parameters.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}