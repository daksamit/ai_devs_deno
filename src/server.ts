

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  Deno.serve(function () {
    return Response.json({
      code: 1
    })
  });
}
