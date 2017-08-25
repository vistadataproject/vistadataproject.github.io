---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV TP GET TRANSACTIONS<br/>
# DENTV TP GET TRANSACTIONS

Returns all of the Transaction type records from the Treatment Plan Transaction/Exam file (228.2) for a particular patient..

## Properties

Property | Value
--- | ---
Label | TXN
MUMPS Implementation | [DENTVTP5](http://code.osehra.org/dox/Routine_DENTVTP5_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | This is a pointer to the PATIENT file.
TYPE | LITERAL | 1 | true | This flag (T, E, P, or S) indicates the type of records to retrieve.  T &#x3D; transaction records  E &#x3D; periodontal exams  P &#x3D; periodontal screening &amp; recording  S &#x3D; soft tissue lesion If not passed, default value is T
SDT | LITERAL | 7 | true | This is an optional date in Fileman format.   If passed only records greater than or equal to this date will be retrieved.  If not passed, default value is Jan 1, 2002
EDT | LITERAL | 7 | true | This is an optional date in Fileman format.   If passed only records less than or equal to this date will be retrieved.  If not passed, default value is TODAY
PROV | LITERAL | 12 | true | This optional parameter will be the provider&#x27;s record number (ien) to the NEW PERSON file (i.e., their DUZ value).   If passed, then only those records with that provider will be returned.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}