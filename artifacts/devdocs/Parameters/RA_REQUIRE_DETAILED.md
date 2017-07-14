---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; RA REQUIRE DETAILED<br/>
# RA REQUIRE DETAILED

DESCRIPTION:   This Radiology/Nuclear Medicine parameter controls whetherrestrictions are placed on imaging procedures orderable based on proceduretype (possible procedure types are: Detailed, Series, Parent, Broad). If this parameter is set to &#x27;0&#x27;, users are allowed to order any imagingprocedure regardless of type. If set to &#x27;1&#x27;, users are not allowed toselect &#x27;Broad&#x27; type imaging procedures.  This parameter may be setdifferently for each division within a multi-divisional facility.

## Properties

Property | Value
--- | ---
Summary | Required Detailed Imaging Procedure
Value Type | yes
Value Domain | 
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | DIVISION
2 | SYSTEM
3 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}