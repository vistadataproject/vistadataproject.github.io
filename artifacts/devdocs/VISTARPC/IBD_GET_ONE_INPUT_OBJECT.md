---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; IBD GET ONE INPUT OBJECT<br/>
# IBD GET ONE INPUT OBJECT

This call will return specific information about any one input objectregardless of type.  Developers should first use the RPC to return theavailable input objects (either by form or by clinic).   There are 3 types of input objects, lists (both static and dynamic),hand print fields, and multiple choice fields.  Each input objectmay be associated with selection rules and data qualifiers.  Thereare 4 selection rules:    0 := any number (including zero)   1 := exactly one   2 := at most one (0 or 1)   3 := at least one (1 or more) There are also a number of data qualifiers that are used to describe thedata, for example, primary, secondary, add to problem list, etc.

## Properties

Property | Value
--- | ---
Label | OBJLST
MUMPS Implementation | [IBDFRPC1](http://code.osehra.org/dox/Routine_IBDFRPC1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IBDF | LIST |  | true | The following variables are required:   IBDF(&quot;PI&quot;)     :&#x3D; pointer to the package interface file   IBDF(&quot;IEN&quot;)    :&#x3D; pointer to the input object (file depends on type)   IBDF(&quot;CLINIC&quot;) :&#x3D; pointer to the hospital location file (required only                     to return provider lists)   IBDF(&quot;DFN&quot;)    :&#x3D; pointer to patient file (required only for patient                     specific dynamic lists such as patient active problems)All are returned by one of the available rpc&#x27;s in aics.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}