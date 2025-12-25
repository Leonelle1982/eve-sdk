export async function anchorToHedera({ payload, topicId }) {
  return {
    network: "hedera",
    anchored: true,
    topicId,
    timestamp: new Date().toISOString(),
    hash: "sha256(payload)"
  };
}

