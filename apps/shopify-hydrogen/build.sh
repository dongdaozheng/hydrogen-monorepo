set -e

echo "开始构建过程"

if [ -d "../../packages/lib" ]; then
  echo "构建工作区依赖"
  pnpm --filter @repo/lib build
  pnpm --filter @repo/components build  
  pnpm --filter @repo/graphql build
else
  echo "跳过工作区依赖（不在monorepo中）"
fi

echo "构建Hydrogen应用"
shopify hydrogen build --codegen

echo "构建完成！"

